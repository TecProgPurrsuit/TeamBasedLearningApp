import { FETCH_LISTS } from '../actions/index';

export default function (state = [], action) {
  switch (action.type) {
    case FETCH_LISTS:
      if (action.payload) {
        return action.payload;
      }
      return state;
    default:
      return state;
  }
}
