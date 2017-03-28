import { SET_AUTH_USER } from './types';

export const setAuthenticatedUser = (value) => {
  //console.log('set val: ' + JSON.stringify(value));
  return {
    type: SET_AUTH_USER,
    payload: value,
  };
};
