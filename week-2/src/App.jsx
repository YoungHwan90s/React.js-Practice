import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { minusOne, plusOne } from "./redux/modules/counter";

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
          dispatch(plusOne());
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          dispatch(minusOne());
        }}
      >
        -
      </button>
    </div>
  );
}

export default App;
