import { FETCH_LISTS, pushListToArray } from '../actions/index';

export default function (state = [], action) {
  switch (action.type) {
    case FETCH_LISTS: {
      const UNAVAILABLELISTS = [];
      if (action.payload) {
        pushListToArray(action.payload, UNAVAILABLELISTS, false);
        return UNAVAILABLELISTS;
      } else {
        return state;
      }
    }
    default:
      return state;
  }
}
