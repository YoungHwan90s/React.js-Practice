import { useEffect, useState } from "react";
// import axios from "axios";
import api from "./axios/api";

function App() {
  const [todos, setTodos] = useState(null);
  const [inputValue, setInputValue] = useState({
    title: "",
  });
  const [targetId, setTargetId] = useState(0);
  const [contents, setContents] = useState("");

  // 조회 함수
  const fetchTodos = async () => {
    const { data } = await api.get("/todos");

    setTodos(data);
  };

  // 추가 함수
  const onSubmitHandler = async () => {
    await api.post("/todos", inputValue);
    // setTodos([...todos, inputValue]);
    fetchTodos();
  };

  // 삭제 함수
  const onDeleteButtonHandler = async (id) => {
    api.delete(`/todos/${id}`);
    setTodos(
      todos.filter((item) => {
        return item.id !== id;
      })
    );
  };

  // 수정 함수
  const onUpdateButtonHandler = async () => {
    api.patch(`/todos/${targetId}`, {
      title: contents,
    });
    setTodos(
      todos.map((item) => {
        if (item.id === +targetId) {
          return { ...item, title: contents };
        } else {
          return item;
        }
      })
    );
  };

  useEffect(() => {
    // db로부터 값을 가져올 것
    fetchTodos();
  }, []);

  return (
    <>
      <div>
        {/* 수정 영역 */}
        <input
          type="text"
          placeholder="수정할 아이디"
          value={targetId}
          onChange={(e) => {
            setTargetId(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="수정할 내용"
          value={contents}
          onChange={(e) => {
            setContents(e.target.value);
          }}
        />
        <button onClick={onUpdateButtonHandler}>수정</button>
        <br />
        <br />
      </div>
      <div>
        {/* INPUT 영역 */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            onSubmitHandler();
            // 버튼 클릭시, inputㅇ 들어있는 값(state)을 이용하여 db에 저장
          }}
        >
          <input
            type="text"
            value={inputValue.title}
            onChange={(e) => {
              setInputValue({ title: e.target.value });
            }}
          />
          <button type="submit">추가</button>
        </form>
      </div>
      <div>
        {/* 데이터 영역 */}
        {todos?.map((item) => {
          return (
            <div key={item.id}>
              {item.id}:{item.title}
              &nbsp;
              <button onClick={() => onDeleteButtonHandler(item.id)}>X</button>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
