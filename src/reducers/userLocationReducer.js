import {
    UPDATE_USER_LOCATION,
} from '../actions/types'
// Initial state for the user.
const INITIAL_STATE = {
    region: {
        latitude: 51.5074,
        longitude: -0.1278,
        latitudeDelta: 1,
        longitudeDelta: 1,
    }
} 

// state is set to INITIAL_STATE if there is no set state.
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    
    case UPDATE_USER_LOCATION: {
        // action.payload is an object key values
        // { latitude: VALUE, longtitude: VALUE }
        console.log(action.payload);
        return{ ...state, region: action.payload };
    }
    default:
      return state;
  }
};
