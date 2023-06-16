import React from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { toDos } from "../shared/data";

function Works() {
  const navigate = useNavigate();

  // 추 후 조건부 렌더링 할 수 있는 기능
  const location = useLocation();
  console.log(location); //{pathname: '/works/1', search: '', hash: '', state: null, key: '8u9s2dk3'}
  console.log(location.pathname.slice(1)); //works

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
      <br />
      <h3>To do List</h3>
      {toDos.map((item) => {
        return (
          <div key={item.id}>
            {item.id}
            &nbsp;
            <Link to={`/works/${item.id}`}>{item.toDo}</Link>
          </div>
        );
      })}
    </div>
  );
}

export default Works;
