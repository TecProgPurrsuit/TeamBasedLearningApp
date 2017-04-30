/**
* This file is responsible for load all components and set server state
*
* @summary Set actual state and load AvailableQuestionList
*
  @class AvailableQuestions
*/

import React, { Component } from 'react';
import { connect } from 'react-redux';
import AvailableQuestionList from './questions/availableQuestionList';
import AllQuestionList from './questions/allQuestionList';

class AvailableQuestions extends Component {
  // This class return all components container
  render() {
    /* global Meteor come from Meteor Library */
    const CURRENTUSER = Meteor.user();

    if (!CURRENTUSER.profile.is_teacher) {
      return (
        <AvailableQuestionList />
      );
    }

    return (
      <AllQuestionList />
    );
  }
}

function mapStateToProps(state) {
  return {
    availableQuestion: state.availableQuestion,
  };
}

export default connect(mapStateToProps)(AvailableQuestions);
