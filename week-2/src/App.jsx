import React from "react";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const counter = useSelector((state) => {
    return state.counter;
  });

  // disPatch 가져오는법
  const dispatch = useDispatch();

  console.log("counter -> ", counter.number);
  return (
    <div>
      <div>Current Count: {counter.number}</div>
      <button
        onClick={() => {
          dispatch({
            type: "PLUS ONE",
          });
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          dispatch({
            type: "MINUS ONE",
          });
        }}
      >
        -
      </button>
    </div>
  );
}

export default App;
