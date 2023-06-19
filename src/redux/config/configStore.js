import { configureStore } from "@reduxjs/toolkit";
import todos from "../modules/todos";

// 1. create rootReducer with reducers
// const rootReducer = combineReducers({
//   todos,
// });

// 2. create store
const store = configureStore({
  reducer: {
    todos,
  },
});

// 3. export
export default store;
