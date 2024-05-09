import * as types from '../actions/ActionTypes';

const initialState = {
  color : [255, 255, 255]
}

//리듀서를 합쳐야함.
export default function ui(state=initialState, action) {

  if(action.type === types.SET_COLOR) {
    console.log('type')
    return {
      color : action.color
    }
  } else {
    console.log(`state`)
    return state;
  }
}
