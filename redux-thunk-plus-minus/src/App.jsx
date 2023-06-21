import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  __addNumber,
  __minusNumber,
  // addNumber,
  // minusNumber,
} from "./redux/module/counterSlice";

function App() {
  const [number, setNumber] = useState(0);
  const dispatch = useDispatch();

  const onClickAddButtonHandler = () => {
    // dispatch(addNumber(+number));
    dispatch(__addNumber(+number));
  };

  const onClickMinusButtonHandler = () => {
    // dispatch(minusNumber(+number));
    dispatch(__minusNumber(+number));
  };

  const globalNumber = useSelector((state) => state.counter.number);

  return (
    <div>
      <div>{globalNumber}</div>
      <input
        type="number"
        onChange={(e) => {
          setNumber(e.target.value);
        }}
      />
      <button onClick={onClickAddButtonHandler}>더하기</button>
      <button onClick={onClickMinusButtonHandler}>빼기</button>
    </div>
  );
}

export default App;
