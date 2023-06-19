import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [todos, setTodos] = useState(null);

  const fetchTodos = async () => {
    const { data } = await axios.get("http://localhost:3001/todos");

    setTodos(data);
    console.log(todos);
  };

  useEffect(() => {
    // db로부터 값을 가져올 것
    fetchTodos();
  }, []);

  return (
    <div>
      {todos?.map((item) => {
        return (
          <div key={item.id}>
            {item.id}:{item.title}
          </div>
        );
      })}
    </div>
  );
}

export default App;
