import React, { Component } from 'react';
import { connect } from 'react-redux';
import AvailableQuestionList from './questions/availableQuestionList';

class AvailableQuestions extends Component {

  render() {
    return (
      <AvailableQuestionList />
    );
  }
}

function mapStateToProps(state) {
  return {
    availableQuestion: state.availableQuestion,
  };
}

export default connect(mapStateToProps)(AvailableQuestions);
