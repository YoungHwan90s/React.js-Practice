import React from "react";

const style = {
  width: "100px",
  height: "100px",
  backgroundColor: "red",
  color: "white",
};

function Box3() {
  console.log("Box3 component is rendered");
  return <div style={style}>Box3</div>;
}

export default React.memo(Box3);
