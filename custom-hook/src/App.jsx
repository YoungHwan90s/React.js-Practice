// import { useState } from "react";
import useInput from "./hooks/useInput";

function App() {
  const [name, onChangeNameHandler] = useInput();
  const [password, onChangePasswordHandler] = useInput();

  // const [name, setName] = useState("");
  // const [password, setPassword] = useState("");

  // const onNameChangeHandler = (e) => {
  //   setName(e.target.value);
  // };

  // const onPasswordChangeHandler = (e) => {
  //   setPassword(e.target.value);
  // };

  return (
    <div>
      name:
      <input type="text" value={name} onChange={onChangeNameHandler} />
      password:{" "}
      <input
        type="password"
        value={password}
        onChange={onChangePasswordHandler}
      />
    </div>
  );
}

export default App;
