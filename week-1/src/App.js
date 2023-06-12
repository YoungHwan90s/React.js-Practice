import React from "react";
import Layout from "Layout";
import Child from "Child";

export function App() {
  const name = "YoungHwan";
  return (
    <Child age={21} name={name}>
      NAME
    </Child>
  );
}
export default App;
