import { createSlice } from "@reduxjs/toolkit";

// DUCKS PATTERN - 1 module file(Action Type, Action Creator, Reducer)

// 1. action type
// const PLUS = "counter/PLUS";
// const MINUS = "conter/MINUS";

// // 2. action creator : action value를 return 하는 함수
// export const plusN = (payload) => {
//   return {
//     type: PLUS,
//     payload,
//   };
// };

// export const minusN = (payload) => {
//   return {
//     type: MINUS,
//     payload,
//   };
// };

// 3. 초기 상태값(state) SET
const initialState = {
  number: 0,
};

// 4. Reducer
// - 'state에 변화를 일으키는 '함수
// - state를 action의 type에 따라 변경하는 함수
// - input : ALWAYS state & action

// const counter = (state = initialState, action) => {
//   switch (action.type) {
//     case PLUS:
//       return {
//         number: state.number + action.payload,
//       };
//     case MINUS:
//       return {
//         number: state.number - action.payload,
//       };
//     default:
//       return state;
//   }
// };

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    plusN: (state, action) => {
      state.number = state.number + action.payload;
    },
    minusN: (state, action) => {
      state.number = state.number - action.payload;
    },
  },
});

export default counterSlice.reducer;
export const { plusN, minusN } = counterSlice.actions;
