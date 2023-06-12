import React, { useState } from "react";

function App() {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  const onIdChangeHandler = (event) => {
    setId(event.target.value);
  };

  const onPWChangeHandler = (event) => {
    setPw(event.target.value);
  };

  const alertAndRefreshInput = () => {
    alert(`The Id you put is ${id} and the password is ${pw}`)
    setId('')
    setPw('')
  }

  return (
    <div>
      <div>
        ID: <input type="text" value={id} onChange={onIdChangeHandler} />
      </div>
      <div>
        PW: <input type="password" value={pw} onChange={onPWChangeHandler} />
      </div>
      <button onClick={alertAndRefreshInput}>LOGIN</button>
    </div>
  );
}

export default App;
