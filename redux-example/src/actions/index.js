// 액션 생성자
// 액션 디렉터리만 불러왔을 때 이파일만 로드될수 있게 하려고 index.js임
import * as types from './ActionTypes';

export function increment() {
  return {
    type : types.INCREMENT
  }
}

export function decrement() {
  return {
    type: types.DECREMENT
  }
}

export function setColor (color) {
  console.log(`setCOlor ; ${color}`)
  return {
    type : types.SET_COLOR,
    color : color
  }
}
