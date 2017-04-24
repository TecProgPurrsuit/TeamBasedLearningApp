import { CONNECT_USER } from '../actions/index';

export default function (state = { }, action) {
  switch (action.type) {
    case CONNECT_USER:
      return action.payload;
    default:
      return state;
  }
}
