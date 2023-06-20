import axios from "axios";

const instance = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
  //   timeout: 1,
});

instance.interceptors.request.use(
  // 요청을 보내기 전 수행되는 함수
  function (config) {
    console.log("Interceptor request success");
    return config;
  },
  // 오류 요청을 보내기 전 수행되는 함수
  function (error) {
    console.log("Interceptor reqeust error");
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  function (response) {
    console.log("Interceptor response receive");
    return response;
  },
  function (error) {
    console.log("Interceptor response error");
    return Promise.reject(error);
  }
);

export default instance;
