/**
* This file is responsible for provide actions to the application
*
* @summary Actions for the application.
*/

export const SELECT_GROUP_ANSWERING = 'SELECT_GROUP_ANSWERING';
export const SELECT_INDIVIDUAL_ANSWERING = 'SELECT_INDIVIDUAL_ANSWERING';
export const CONNECT_USER = 'CONNECT_USER';
export const FETCH_LISTS = 'FETCH_LISTS';
export const ERASE_USER = 'ERASE_USER';

export function fetchLists() {
  return async function (dispatch) {
    const LISTSDATA = await
    /* global Meteor comes from Meteor Library */
    Meteor.callPromise('lists.getAll');
    return dispatch({
      type: FETCH_LISTS,
      payload: LISTSDATA,
    });
  };
}

export function selectGroupAnswering() {
  const GROUP_ANSWERING = 'GroupAnswering';
  return {
    type: SELECT_GROUP_ANSWERING,
    payload: GROUP_ANSWERING,
  };
}

export function selectIndividualAnswering() {
  const INDIVIDUAL_ANSWERING = 'IndividualAnswering';
  return {
    type: SELECT_INDIVIDUAL_ANSWERING,
    payload: INDIVIDUAL_ANSWERING,
  };
}

export function connectUser(user) {
  const currentUser = user;
  return {
    type: CONNECT_USER,
    payload: currentUser,
  };
}

export function eraseUser() {
  const currentUser = { };
  return {
    type: ERASE_USER,
    payload: currentUser,
  };
}


export function pushListToArray(arrayList, emptyArray, typeOfList) {
  arrayList.map((list) => {
    if (list.enable === typeOfList) {
      emptyArray.push(list);
    } else {
      // do nothing
    }
  });
}
