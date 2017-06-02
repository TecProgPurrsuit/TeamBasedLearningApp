import { FETCH_LISTS, pushListToArray } from '../actions/index';

export default function (state = [], action) {
  switch (action.type) {
    case FETCH_LISTS: {
      const AVAILABLELISTS = [];
      if (action.payload) {
        pushListToArray(action.payload, AVAILABLELISTS, true);
        return AVAILABLELISTS;
      } else {
        return state;
      }
    }
    default:
      return state;
  }
}
