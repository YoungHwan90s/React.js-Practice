import React from "react";

function Home() {
  let timerId = null;

  const throttle = (delay) => {
    if (timerId) {
      return;
    }
    console.log(`API요청 실행! ${delay}ms 동안 추가요청은 안받습니다! `);
    timerId = setTimeout(() => {
      console.log(`${delay}ms 지남 추가 요청 받습니다!`);
      timerId = null;
    }, delay);
  };
  // 반복적인 이벤트 이후, delay가 지나면 function
  const debounce = (delay) => {
    if (timerId) {
      clearTimeout(timerId);
    }
    timerId = setTimeout(() => {
      console.log(`마지막 요청으로 부터 ${delay}ms 지났으므로 API 요청 실행`);
      timerId = null;
    }, delay);
  };

  return (
    <div
      style={{
        paddingLeft: 20,
        paddingRight: 20,
      }}
    >
      <h1>Button 이벤트 예제</h1>
      <button onClick={() => throttle(2000)}>쓰로틀링 버튼</button>
      <button onClick={() => debounce(2000)}>디바운싱 버튼</button>
    </div>
  );
}

export default Home;
