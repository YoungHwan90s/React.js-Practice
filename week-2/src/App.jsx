import React from "react";
import TestPage from "./components/TestPage";
import GlobalStyle from "./GlobalStyle";

function App() {
  return (
    <>
      <GlobalStyle />
      <TestPage title="it is title" contents="contents" />
    </>
  );
}

export default App;
