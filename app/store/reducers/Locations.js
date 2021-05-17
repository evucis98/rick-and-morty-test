import * as types from '../constants/Locations';
import initialState from '../state';

export default (state = initialState, action) => {
  switch (action.type) {
    case types.SAVE_LOCATIONS:
      return {
        ...state,
        location: action.data.results,
        info: action.data.info,
      };
    case types.SAVE_CURR_PAGE:
      return {
        ...state,
        page: action.data,
      };
    case types.SAVE_TYPE:
      return {
        ...state,
        type: action.data,
      };
    case types.SAVE_DIMENSION:
      return {
        ...state,
        dimension: action.data,
      };
    default:
      return state;
  }
};
