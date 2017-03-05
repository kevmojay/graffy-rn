import { combineReducers } from 'redux';
import MapReducer from './MapReducer';
import MarkerReducer from './MarkerReducer';
import AuthenticatedUserReducer from './AuthenticatedUserReducer';

export default combineReducers({
  markers: MarkerReducer,
  map: MapReducer,
  AuthenticatedUser: AuthenticatedUserReducer,
});
