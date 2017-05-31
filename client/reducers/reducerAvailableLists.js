import { FETCH_LISTS } from '../actions/index';

export default function (state = [], action) {
  switch (action.type) {
    case FETCH_LISTS: {
      const AVAILABLELISTS = [];
      if (action.payload) {
        action.payload.map((list) => {
          if (list.enable) {
            AVAILABLELISTS.push(list);
          }
          return undefined;
        });
        return AVAILABLELISTS;
      } else {
        return state;
      }
    }
    default:
      return state;
  }
}
