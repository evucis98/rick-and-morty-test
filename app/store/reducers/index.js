import { combineReducers } from 'redux';

import locations from './Locations';

const combinedReducer = combineReducers({
  locations,
});

const rootReducer = (state, action) => {
  return combinedReducer(state, action);
};

export default rootReducer;
