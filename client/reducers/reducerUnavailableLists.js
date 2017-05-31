import { FETCH_LISTS } from '../actions/index';

export default function (state = [], action) {
  switch (action.type) {
    case FETCH_LISTS: {
      const UNAVAILABLELISTS = [];
      if (action.payload) {
        action.payload.map((list) => {
          if (!list.enable) {
            UNAVAILABLELISTS.push(list);
          }
          return undefined;
        });
        return UNAVAILABLELISTS;
      }
      return state;
    }

    default:
      return state;
  }
}
