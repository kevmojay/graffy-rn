import { combineReducers } from 'redux';
import MapReducer from './MapReducer';
import MarkerReducer from './MarkerReducer';

export default combineReducers({
  markers: MarkerReducer,
  map: MapReducer,
});
