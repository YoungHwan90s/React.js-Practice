import React, { useRef, useState } from "react";

function App() {
  // ref에 저장한 값은 렌더링을 일으키지 않는다.
  // 즉 초기화 되는 것을 막을 수 있다.
  const [count, setCount] = useState(0);
  const countRef = useRef(0);
  const style = {
    border: "1px solid black",
    margin: "10px",
    padding: "10px",
  };

  const plusStateButtonHandler = () => {
    setCount(count + 1);
  };

  const plusRefButtonHandler = () => {
    countRef.current++;
    console.log(countRef.current)
  };

  return (
    <div>
      <div style={style}>
        state area {count} <br />
        <button onClick={plusStateButtonHandler}>state increase</button>
      </div>
      <div style={style}>
        ref area {countRef.current} <br />
        <button onClick={plusRefButtonHandler}>ref increase</button>
      </div>
    </div>
  );
}

export default App;
