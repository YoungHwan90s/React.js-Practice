import React from "react";

const style = {
  width: "100px",
  height: "100px",
  backgroundColor: "blue",
  color: "white",
};

function Box2() {
  console.log("Box2 component is rendered");
  return <div style={style}>Box2</div>;
}

export default React.memo(Box2);
