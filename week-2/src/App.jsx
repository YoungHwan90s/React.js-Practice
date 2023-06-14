import React, { useRef, useEffect, useState } from "react";

function App() {
  // 화면이 렌더링 될 때, 어떤 작업을 하고 싶다 : useEffect!
  const idRef = useRef("");
  const pwRef = useRef("");
  const [id, setId] = useState("");

  useEffect(() => {
    idRef.current.focus();
  }, []);

  useEffect(() => {
    if (id.length >= 10) {
      pwRef.current.focus();
    }
  }, [id]);

  return (
    <div>
      <div>
        id:{" "}
        <input
          value={id}
          onChange={(event) => {
            setId(event.target.value);
          }}
          type="text"
          ref={idRef}
        />
      </div>
      <div>
        pw: <input type="password" ref={pwRef} />
      </div>
    </div>
  );
}

export default App;
