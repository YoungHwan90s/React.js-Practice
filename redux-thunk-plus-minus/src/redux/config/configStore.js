import { configureStore } from "@reduxjs/toolkit";
import counter from "../module/counterSlice";

const store = configureStore({ reducer: { counter } });

export default store;
