/**
* This reducer is responsible to return a JSON of the current user.
*
* @summary Reducer for update state with current user.
*/


import { CONNECT_USER, ERASE_USER } from '../actions/index';

export default function (state = { }, action) {
  switch (action.type) {
    case CONNECT_USER: {
      const USER = action.payload;
      if (USER) {
        return USER;
      } else {
        return state;
      }
    }
    case ERASE_USER: {
      const USER = action.payload;
      return USER;
    }
    default:
      return state;
  }
}
