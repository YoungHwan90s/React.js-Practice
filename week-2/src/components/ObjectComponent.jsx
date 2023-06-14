import React, { useEffect, useState, useMemo } from "react";

function ObjectComponent() {
  const [isAlive, setIsAlive] = useState(true);
  const [uselessCount, setUselessCount] = useState(0);

  // const me = {
  //   name: "Ted Chang",
  //   age: 21,
  //   isAlive: isAlive ? "생존" : "사망",
  // };

  // 2. 따라서 위의 객체를 useMemo를 추가하여, isAlive가 변경 되었을 때만 실행
  const me = useMemo(() => {
    return {
      name: "Ted Chang",
      age: 21,
      isAlive: isAlive ? "생존" : "사망",
    };
  }, [isAlive]);

  // 1. dependency 배열에 me를 추가하더라도, setUselessCount를 호출하면, 컴포넌트가 리렌더링 되기 때문에 콘솔이 출력되버린다!
  useEffect(() => {
    console.log("생존여부가 바뀔 때만 호출해주세요!");
  }, [me]);

  return (
    <>
      <div>
        내 이름은 {me.name}이구, 나이는 {me.age}야!
      </div>
      <br />
      <div>
        <button
          onClick={() => {
            setIsAlive(!isAlive);
          }}
        >
          누르면 살았다가 죽었다가 해요
        </button>
        <br />
        생존여부 : {me.isAlive}
      </div>
      <hr />
      필요없는 숫자 영역이에요!
      <br />
      {uselessCount}
      <br />
      <button
        onClick={() => {
          setUselessCount(uselessCount + 1);
        }}
      >
        누르면 숫자가 올라가요
      </button>
    </>
  );
}

export default ObjectComponent;
