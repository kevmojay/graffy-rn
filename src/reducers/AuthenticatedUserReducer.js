import { SET_AUTH_USER } from '../actions/types';

const INITIAL_STATE = {};
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_AUTH_USER:
      return action.payload;
    default:
      return state;
  }
};
