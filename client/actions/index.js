/**
* This file is responsible for provide actions to the application
*
* @summary Actions for the application.
*/

export const SELECT_GROUP_ANSWERING = 'SELECT_GROUP_ANSWERING';
export const SELECT_INDIVIDUAL_ANSWERING = 'SELECT_INDIVIDUAL_ANSWERING';


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
