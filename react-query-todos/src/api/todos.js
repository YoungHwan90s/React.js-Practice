import axios from "axios";

// 조회
const getTodos = async () => {
  const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/todos`);
  return response.data;
};

// 추가
const addTodo = async (newTodo) => {
  await axios.post(`${process.env.REACT_APP_SERVER_URL}/todos`, newTodo);
};

export { getTodos, addTodo };
