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
    case "PLUS ONE":
      return {
        number: state.number + 1,
      };
    case "MINUS ONE":
      return {
        number: state.number - 1,
      };
    default:
      return state;
  }
};

export default counter;
