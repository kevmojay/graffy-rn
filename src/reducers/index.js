import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import MapReducer from './MapReducer';
import MarkerReducer from './MarkerReducer';
import AuthenticatedUserReducer from './AuthenticatedUserReducer';

export default combineReducers({
  form: formReducer,
  markers: MarkerReducer,
  map: MapReducer,
  AuthenticatedUser: AuthenticatedUserReducer,
});
