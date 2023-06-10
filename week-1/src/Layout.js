import React from "react";

function Layout(props) {
  return (
    <>
      <header
        style={{
          margin: "10px",
          border: "1px solid red",
        }}
      >
        It's header that printed all the time
      </header>
      {props.children}
    </>
  );
}

export default Layout;
