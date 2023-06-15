import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div>
      Home
      <br />
      <button
        onClick={() => {
          navigate("/works/2");
        }}
      >
        MOVE TO WORKS
      </button>
    </div>
  );
}

export default Home;
