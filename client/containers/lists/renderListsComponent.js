/**
* This file is responsible for giving user a list of questions, verifying
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

  // Verify if the current user is a teacher
  if (CURRENT_USER.profile.is_teacher) {
    return (
      <AllLists />
    );
  } else {
    return (
      <AllAvailableLists />
    );
  }
}

// Get the state of currentUser from redux
function mapStateToProps(state) {
  return {
    currentUser: state.currentUser,
  };
}

// Especify the currentUser type and if it is requered on system
RenderListsComponent.propTypes = {
  currentUser: React.PropTypes.object.isRequired,
};

// Export the RenderLists component
export default connect(mapStateToProps)(RenderListsComponent);
