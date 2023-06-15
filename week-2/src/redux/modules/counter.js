// action value
export const PLUS_ONE = "counter/PLUS_ONE";
export const MINUS_ONE = "counter/MINUS_ONE";

// action creator : action value를 return 하는 함수
export const plusOne = () => {
  return {
    type: PLUS_ONE,
  };
};

export const minusOne = () => {
  return {
    type: MINUS_ONE,
  };
};

// 초기 상태값(state)
const initialState = {
  number: 0,
};

// 리듀서
// - 'statedㅔ 변화를 일으키는 '함수
// - state를 action의 type에 따라 변경하는 함수

// input : state & action
const counter = (state = initialState, action) => {
  switch (action.type) {
    case PLUS_ONE:
      return {
        number: state.number + 1,
      };
    case MINUS_ONE:
      return {
        number: state.number - 1,
      };
    default:
      return state;
  }
};

export default counter;
