import {
    UPDATE_USER_LOCATION,
} from '../actions/types'
// Initial state for the user.
const INITIAL_STATE = {
    region: {
        latitude: 34.2359,
        longitude: -118.5280,
        latitudeDelta: .5,
        longitudeDelta: .5,
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
