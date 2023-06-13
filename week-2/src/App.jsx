import React, { useEffect, useState } from "react";

function App() {
  const [value, setValue] = useState("");
  
  // Dependency Array
  // 배열에 값을 넣어, 값이 바뀔 때만 useEffect 실행!
  useEffect(() => {
    console.log(`value change ${value}`);
    
    return () => {
      console.log('clean up part')
    }
  }, [value]);

  return (
    <div>
      <input
        type="text"
        onChange={(event) => {
          setValue(event.target.value);
        }}
      ></input>
    </div>
  );
}

export default App;
