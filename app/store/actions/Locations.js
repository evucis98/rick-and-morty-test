import * as types from '../constants/Locations';

export const saveLocation = (data) => ({
  type: types.SAVE_LOCATIONS,
  data,
});

export const saveCurrPage = (data) => ({
  type: types.SAVE_CURR_PAGE,
  data,
});

export const saveType = (data) => ({
  type: types.SAVE_TYPE,
  data,
});

export const saveDimension = (data) => ({
  type: types.SAVE_DIMENSION,
  data,
});
