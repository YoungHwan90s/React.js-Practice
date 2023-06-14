import React, { useRef, useEffect } from "react";

function App() {
  // 화면이 렌더링 될 때, 어떤 작업을 하고 싶다 : useEffect!
  const idRef = useRef("");

  useEffect(() => {
    idRef.current.focus();
  }, []);

  return (
    <div>
      <div>
        id: <input type="text" ref={idRef} />
      </div>
      <div>
        pw: <input type="password" />
      </div>
    </div>
  );
}

export default App;
