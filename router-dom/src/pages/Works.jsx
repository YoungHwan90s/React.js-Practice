import React from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";

function Works() {
  const navigate = useNavigate();

  // param 값 얻는 법
  const { pageNum } = useParams();
  console.log(123, pageNum); // 1

  // 추 후 조건부 렌더링 할 수 있는 기능
  const location = useLocation();
  console.log(location); //{pathname: '/works/1', search: '', hash: '', state: null, key: '8u9s2dk3'}

  return (
    <div>
      Works
      <br />
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        MOVE TO HOME
      </button>
      <br />
      <Link to={"/contact"}>MOVE TO CONTACT</Link>
    </div>
  );
}

export default Works;
