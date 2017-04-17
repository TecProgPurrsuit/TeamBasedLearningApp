/**
* This file is where the cards for indidual answers is rendered.
*
* @summary Individual card container.
*
* @link /individual-simulator
* @class CardIndividual
*/

import React, { Component } from 'react';
import { connect } from 'react-redux';

class CardIndividual extends Component {

  static renderQuestionAlternative(question) {
    return question.alternatives.map((alternative) => {
      return (
        <div
          className="card-action"
          key={alternative.alternativeDescription}
        >
          <a
            className="collection-item black-text"
          >
            {alternative.alternativeDescription}
          </a>
          <form id="point-form">
          Pontos:
            <input
              type="number" name="points"
              min="0" max="4"/>
          </form>
        </div>
      );
    });
  }

  renderQuestions() {
    const questions = this.props.questionList[0].questions;
    return questions.map((question) => {
      return (
        <div
          className="card"
          key={question.description}
        >
          <div
            className="card-content white-text"
          >
            <div
              className="card-title"
            >
              {question.description}
            </div>
          </div>
          {CardIndividual.renderQuestionAlternative(question)}
          <input className="button-submit" type="submit" form="point-form"/>
        </div>
      );
    });
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
    questionList: state.questionList,
  };
}

CardIndividual.propTypes = {
  questionList: React.PropTypes.array.isRequired,
};

export default connect(mapStateToProps)(CardIndividual);
