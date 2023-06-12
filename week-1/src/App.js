import React, { useState } from "react";

function App() {
  // hook
  const [name, setName] = useState('YoungHwan');
  const nameChange = () => setName('newNameChange')
  
  return (
    <div>
      {name}
      <br />
      <button onClick={nameChange}>click</button>
    </div>
  );
}

export default App;
