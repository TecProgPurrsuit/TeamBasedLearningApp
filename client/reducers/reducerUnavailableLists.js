/**
* This reducer is responsible to return only the unavailable lists found on database.
* In case of the database don't have an unavailable list, the function should return an empty array.
*
* @summary Reducer for update state with unavailable lists.
*/


import { FETCH_LISTS, pushListToArray } from '../actions/index';

export default function (state = [], action) {
  switch (action.type) {
    case FETCH_LISTS: {
      const UNAVAILABLELISTS = [];
      const ALL_LISTS = action.payload;
      if (ALL_LISTS) {
        const UNAVAILABLE = false;
        pushListToArray(ALL_LISTS, UNAVAILABLELISTS, UNAVAILABLE);
        return UNAVAILABLELISTS;
      } else {
        return state;
      }
    }
    default:
      return state;
  }
}
