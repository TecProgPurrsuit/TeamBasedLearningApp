import React, { Component } from 'react';
import { connect } from 'react-redux';
import AvailableCardList from './cards/availableCardList';

class AvailableQuestions extends Component {

  render() {
    return (
      <AvailableCardList />
    );
  }
}

function mapStateToProps(state) {
  return {
    availableQuestion: state.availableQuestion,
  };
}

export default connect(mapStateToProps)(AvailableQuestions);
