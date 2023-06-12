import React, { useState } from "react";

function App() {
  // hook
  const [fruit, setFruit] = useState("");

  return (
    <div>
      fruit:{" "}
      <input
        value={fruit}
        onChange={function (event) {
          setFruit(event.target.value);
        }}
      />
      <br /> <br />
      {fruit}
    </div>
  );
}

export default App;
