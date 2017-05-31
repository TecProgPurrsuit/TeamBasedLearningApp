/**
* This file is responsible for provide actions to the application
*
* @summary Actions for the application.
*/

export const SELECT_GROUP_ANSWERING = 'SELECT_GROUP_ANSWERING';
export const SELECT_INDIVIDUAL_ANSWERING = 'SELECT_INDIVIDUAL_ANSWERING';
export const CONNECT_USER = 'CONNECT_USER';
export const FETCH_LISTS = 'FETCH_LISTS';
/* global Meteor comes from Meteor Library*/

export function fetchLists() {
  return async function (dispatch) {
    const LISTSDATA = await
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
