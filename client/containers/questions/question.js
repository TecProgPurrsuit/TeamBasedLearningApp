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

require('./style/question.css');

class Question extends Component {

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
    }
    return (
      <div>Questions render error</div>
    );
  }


  render() {
    return (
      <div>
        {this.renderQuestions()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    questionListData: state.questionListData,
  };
}

Question.propTypes = {
  questionListData: React.PropTypes.array.isRequired,
};

export default connect(mapStateToProps)(Question);
