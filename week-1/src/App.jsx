import React from "react";
import "./App.css";
import { useState } from "react";
import User from "./components/User";
import Button from "./components/Button";

function App() {
  const user = [
    { id: 1, age: 25, name: "Sujin" },
    { id: 2, age: 26, name: "Mike" },
    { id: 3, age: 27, name: "Minho" },
    { id: 4, age: 28, name: "YH" },
  ];

  const [users, setUsers] = useState(user);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const nameChangeHandler = (event) => {
    setName(event.target.value);
  };
  const ageChangeHandler = (event) => {
    setAge(event.target.value);
  };

  const addButtonHandler = () => {
    const newUser = {
      id: users.length + 1,
      age,
      name,
    };
    setUsers([...users, newUser]);
  };

  const removeButtonHandler = (id) => {
    const newUsersArr = users.filter((user) => user.id !== id);
    setUsers([...newUsersArr]);
  };

  return (
    <div>
      <div>
        Name :&nbsp;
        <input value={name} onChange={nameChangeHandler} /> <br />
        Age?? :&nbsp;
        <input value={age} onChange={ageChangeHandler} />
        <br />
        <Button addButtonHandler={addButtonHandler}>추가</Button>
      </div>
      <div className="app-style">
        {users.map((user) => {
          return (
            <User
              key={user.id}
              user={user}
              removeButtonHandler={removeButtonHandler}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
