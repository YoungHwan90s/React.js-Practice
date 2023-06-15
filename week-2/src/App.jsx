import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { minusN, plusN } from "./redux/modules/counter";

function App() {
  const counter = useSelector((state) => {
    return state.counter;
  });

  const [number, setNumber] = useState("");

  // disPatch 가져오는법
  // action 객체를 store로 dispatch가 던진다! 개념
  const dispatch = useDispatch();

  return (
    <div>
      <div>Current Count: {counter.number}</div>
      <div>
        <input
          value={number}
          onChange={(event) => setNumber(+event.target.value)}
          type="number"
        />
      </div>
      <button
        onClick={() => {
          dispatch(plusN(number));
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          dispatch(minusN(number));
        }}
      >
        -
      </button>
    </div>
  );
}

export default App;
