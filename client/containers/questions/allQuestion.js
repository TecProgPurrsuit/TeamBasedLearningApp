/**
* This file is responsible for create and organize componets and child
*   components to show all the questions and templet when needed.
*
* @summary Show all questions list
*
  @class AvailableQuestion
*/

import React, { Component } from 'react';
import { connect } from 'react-redux';

class AllQuestion extends Component {
// This class manages all components of available questions
  renderAllQuestions() {
    const questions = this.props.questionListData;

    return questions.map((question) => {
      return (
        <div key={question.description}> All avaiable and unavaiable questions. </div>
      );
    });
  }


  render() {
    return (
      <div>
        {this.renderAllQuestions()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    questionListData: state.questionListData,
  };
}

AllQuestion.propTypes = {
  questionListData: React.PropTypes.array.isRequired,
};

export default connect(mapStateToProps)(AllQuestion);
