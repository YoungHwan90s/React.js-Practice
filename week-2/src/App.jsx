import React, { useState, useCallback } from "react";
import Box1 from "./components/Box1";
import Box2 from "./components/Box2";
import Box3 from "./components/Box3";

function App() {
  const [count, setCount] = useState(0);
  const plusButtonHandler = () => {
    setCount(count + 1);
  };

  const minusButtonHandler = () => {
    setCount(count - 1);
  };

  const initCount = useCallback(() => {
    console.log(`Changed from ${count} to 0`)
    setCount(0)
  }, [count])

  return (
    <div>
      <h3>Count example</h3>
      <p>current Count: {count}</p>
      <button onClick={plusButtonHandler}>+</button>
      <button onClick={minusButtonHandler}>-</button>
      <div style={{
        display: "flex",
        marginTop: "10px"
      }}>
        <Box1 initCount={initCount}/>
        <Box2 />
        <Box3 />
      </div>
    </div>
  );
}

export default App;
