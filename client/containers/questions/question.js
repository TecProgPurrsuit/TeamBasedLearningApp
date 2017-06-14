/**
* This file is responsible for rendering the questions for the user.
*
* @summary Component for show the questions of a list.
*
* @class Question
*/

import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuestionAlternatives from './questionAlternatives';

// Insert stylesheet on components
require('./style/question.css');

class Question extends Component {

  // Rendering the questions if it is not empty
  renderQuestions() {
    const EMPTY = 0;
    if (this.props.questionListData.length > EMPTY) {
      const questions = this.props.questionListData[0].questions;
      return questions.map((question) => {
        return (
          <div className="card" key={question.description} >
            <div className="card-content white-text" >
              <div className="card-title">
                {question.description}
              </div>
            </div>
            <QuestionAlternatives questionAlternatives={question.alternatives} />
          </div>
        );
      });
    } else {
      return (
        <div>Questions render error</div>
      );
    }
  }

  render() {
    return (
      <div>
        {this.renderQuestions()}
      </div>
    );
  }
}

// Get the state of questionListData from redux
function mapStateToProps(state) {
  return {
    questionListData: state.questionListData,
  };
}

// Especific the questionListData type and if it is requered on system
Question.propTypes = {
  questionListData: React.PropTypes.array.isRequired,
};

// Export the Question component
export default connect(mapStateToProps)(Question);
