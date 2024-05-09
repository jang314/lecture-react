import * as types from '../actions/ActionTypes';

// 리듀서의 초기 상태설정.
const initialState = {
  number : 0,
  dummy : 'dumb',
  dumbObject : {
    d:0,
    u:1,
    m:2,
    b:3
  }
};

// 이전 상태와 액션을 받는다.
export default function counter (state = initialState, action) {
  switch(action.type) {
    case types.INCREMENT :
      return { ...state,
                number : state.number + 1,
                dumbObject : {
                  ...state.dumbObject, u:0
                }}

    case types.DECREMENT :
      return { ...state, number : state.number - 1}

    default :
      return state;

  }


  return state;
}
