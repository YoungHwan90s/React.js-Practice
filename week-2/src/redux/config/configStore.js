// 중앙 데이터 관리소를 설정하는 부분
import { configureStore } from "@reduxjs/toolkit";
// import { combineReducers, createStore } from "redux";
import counter from "../modules/counter";

// 일반 리듀서
// const rootReducer = combineReducers({
//   counter,
// });
// const store = createStore(rootReducer);

// toolkit이 제공하는 스토어 생성 방법
const store = configureStore({
  reducer: {
    counter,
  },
});

export default store;
