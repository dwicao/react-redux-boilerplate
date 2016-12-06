import * as types from './actionTypes';

export function addBlahblahblah(text) {
  return {
    type: types.TOGGLE_TODO,
    payload: {
      isDone: false,
      text
    }
  };
}