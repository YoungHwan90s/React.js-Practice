import React from "react";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const plusNumber = () => {
    let plusCount = count + 1;
    setCount(plusCount);
  };
  const minusNumber = () => {
    let minusNumber = count - 1;
    setCount(minusNumber);
  };

  return (
    <div>
      <div>{count}</div>
      <button onClick={plusNumber}>+</button>
      <button onClick={minusNumber}>-</button>
    </div>
  );
}

export default App;
