import React, { useState } from "react";

function App() {
  const [number, setNumber] = useState(0);

  return (
    <div>
      <div>number: {number}</div>
      <button
        onClick={() => {
          // 기존 업데이트 방법 - 1만 올라감
          // 배치 업데이트 한거번에 모아서 한 번만 반영)
          // setNumber(number + 1);
          // setNumber(number + 1);
          // setNumber(number + 1);

          // 함수형 업데이트 방법 (함수는 반환 값이 있어)
          setNumber(currentNumber => currentNumber + 1);
          setNumber(currentNumber => currentNumber + 1);
          setNumber(currentNumber => currentNumber + 1);
        }}
      >
        click
      </button>
    </div>
  );
}

export default App;
