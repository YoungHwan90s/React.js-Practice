import React from "react";
import { useParams } from "react-router-dom";
import { toDos } from "../shared/data";

function Work() {
  const params = useParams();

  // Let's search which todo is,
  const foundData = toDos.find((item) => {
    return item.id === parseInt(params.id);
  });

  console.log(foundData);

  return (
    <div>
      <h3>To do: {foundData.toDo}</h3>
    </div>
  );
}

export default Work;
