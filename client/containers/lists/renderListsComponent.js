/**
* This file is responsible for giving user a list of list of questios, verifying
* the user hierarchy: teacher or student.
*
* @summary Defining list for the user.
*
*/

import React from 'react';
import { connect } from 'react-redux';

import AllAvailableLists from './available/allAvailableLists';
import AllLists from './allLists';

function RenderListsComponent(props) {
  const CURRENT_USER = props.currentUser;
  if (!CURRENT_USER.profile.is_teacher) {
    return (
      <AllAvailableLists />
    );
  }
  return (
    <AllLists />
  );
}

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser,
  };
}

export default connect(mapStateToProps)(RenderListsComponent);

RenderListsComponent.propTypes = {
  currentUser: React.PropTypes.object.isRequired,
};
