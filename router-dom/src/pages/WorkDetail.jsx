import React from "react";
import { useParams } from "react-router-dom";
import { toDos } from "../shared/data";

function WorkDetail() {
  const { id } = useParams();

  // Let's search which todo is,
  const foundData = toDos.find((item) => {
    return item.id === parseInt(id);
  });

  console.log(foundData);

  return (
    <div>
      <h3>To do: {foundData.toDo}</h3>
    </div>
  );
}

export default WorkDetail;
