/**
* This file is responsible for update the state after the type of answering be selected by the user.
*
* @summary Reducer for update state with the type of answering.
*/

import { SELECT_GROUP_ANSWERING, SELECT_INDIVIDUAL_ANSWERING } from '../actions/index';

const EMPTY = 'EMPTY';

export default function (state = EMPTY, action) {
  switch (action.type) {
    case SELECT_GROUP_ANSWERING:
      return action.payload;
    case SELECT_INDIVIDUAL_ANSWERING:
      return action.payload;
    default:
      return state;
  }
}
