import { combineReducers } from 'redux';
import getServices from './services/getServices';
import loadingServices from './services/loading';

const reducers = combineReducers({
  services: getServices,
  loadServices: loadingServices,
});

export default reducers;
