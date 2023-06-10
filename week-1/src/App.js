import React from "react";

function Son() {
  return <div>I'm a Son</div>
}

function Mother() {
  return <Son />
}

function GrandFather() {
  return <Mother />
}

function App() {
  return <GrandFather />
}

export default App;