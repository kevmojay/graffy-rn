import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import MapReducer from './MapReducer';
import MarkerReducer from './MarkerReducer';
import AuthenticatedUserReducer from './AuthenticatedUserReducer';
import userLocationReducer from './userLocationReducer';

export default combineReducers({
  form: formReducer,
  markers: MarkerReducer,
  map: MapReducer,
  AuthenticatedUser: AuthenticatedUserReducer,
  userLocation: userLocationReducer,
});
