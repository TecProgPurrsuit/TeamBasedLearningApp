/**
* This reducer is responsible to return only the available lists found on database.
* In case of the database don't have an available list, the function should return an empty array.
*
* @summary Reducer for update state with available lists.
*/


import { FETCH_LISTS, pushListToArray } from '../actions/index';

export default function (state = [], action) {
  switch (action.type) {
    case FETCH_LISTS: {
      const AVAILABLELISTS = [];
      const ALL_LISTS = action.payload;
      if (ALL_LISTS) {
        const AVAILABLE = true;
        pushListToArray(ALL_LISTS, AVAILABLELISTS, AVAILABLE);
        return AVAILABLELISTS;
      } else {
        return state;
      }
    }
    default:
      return state;
  }
}
