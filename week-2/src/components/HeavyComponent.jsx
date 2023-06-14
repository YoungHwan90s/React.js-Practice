import React, { useState, useMemo } from "react";

function HeavyButton() {
  const [count, setCount] = useState(0);

  const heavyWork = () => {
    for (let i = 0; i < 1000000000; i++) {}
    return 100;
  };

    // useMemo : 함수의 결과값을 캐싱 처리
    
	// CASE 1 : useMemo를 사용하지 않았을 때
//   const value = heavyWork();

	// CASE 2 : useMemo를 사용했을 때
  const value = useMemo(() => heavyWork(), []);

  return (
    <>
      <p>나는 {value}을 가져오는 엄청 무거운 작업을 하는 컴포넌트야!</p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        누르면 아래 count가 올라가요!
      </button>
      <br />
      {count}
    </>
  );
}

export default HeavyButton;