/**
* This reducer is responsible to return all lists found on database.
* In case of the database don't have a list, the function should return an empty array.
*
* @summary Reducer for update state with all lists.
*/

import { FETCH_LISTS } from '../actions/index';

export default function (state = [], action) {
  switch (action.type) {
    case FETCH_LISTS: {
      const ALL_LISTS = action.payload;
      if (ALL_LISTS) {
        return ALL_LISTS;
      } else {
        return state;
      }
    }
    default:
      return state;
  }
}
