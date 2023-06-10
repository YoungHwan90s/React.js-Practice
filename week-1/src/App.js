import React from "react";

function Child() {
  const onClickButtonHandler = () => {
    alert("Well done");
  };
  return (
    <div
      style={{
        height: "100vh",
        display: " flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <span>This is App Component I made</span>
      <button onClick={onClickButtonHandler}>Click!</button>
    </div>
  );
}

function App() {
  return <Child />;
}

export default App;
