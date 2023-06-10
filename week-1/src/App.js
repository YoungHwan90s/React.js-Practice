import React from "react";

export default function App() {
  const number = 1;
  const pTagStyle = {
    color: 'red',
  }
  return (
    <div>
      <p style={pTagStyle}>Hi React</p>
      <p style={pTagStyle}>
        {
        number > 10
          ? number + " is bigger than 10"
          : number + " is less than 10"
        }
      </p>
    </div>
  );
}
