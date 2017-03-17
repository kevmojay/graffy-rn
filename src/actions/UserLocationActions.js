import { UPDATE_USER_LOCATION } from './types';

export const updateUserLocation = (value) => {
  console.log(value);
  return {
    type: UPDATE_USER_LOCATION,
    payload: value,
  };
};
