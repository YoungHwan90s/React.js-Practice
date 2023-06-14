import React from "react";

const style = {
  width: "100px",
  height: "100px",
  backgroundColor: "black",
  color: "white",
};

function Box1({ initCount }) {
  console.log("Box1 component is rendered");
  return (
    <div style={style}>
      <button
        onClick={() => {
          initCount();
        }}
      >
        clear
      </button>
    </div>
  );
}

export default React.memo(Box1);
