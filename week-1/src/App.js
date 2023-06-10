import React from 'react'

function Son(props) {
  return <div>I'm a {props.GrandFatherName}'s' grandchild</div>
}

function Mother(props) {
  const name = "Janet"
  const GrandFatherName = props.GrandFatherName
  return <Son GrandFatherName={GrandFatherName} />
}

function GrandFather() {
  const name = "Michael";
  return <Mother GrandFatherName={name} />
}

function App() {
  return <GrandFather />
}

export default App