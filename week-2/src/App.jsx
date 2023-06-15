import React from "react";
import { useSelector } from "react-redux";

function App() {
  const counter = useSelector((state) => {
    return state.counter;
  });

  console.log("counter -> ", counter.number);
  return <div>App</div>;
}

export default App;
