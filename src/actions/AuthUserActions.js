import { SET_AUTH_USER, UPDATE_AUTH_USER } from './types';

export const setAuthenticatedUser = value => ({
  type: SET_AUTH_USER,
  payload: value,
});

export const updateAuthenticatedUser = value => ({
  type: UPDATE_AUTH_USER,
  payload: value,
});
