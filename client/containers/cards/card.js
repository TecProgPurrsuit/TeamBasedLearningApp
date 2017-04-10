import React, { Component } from 'react';
import { connect } from 'react-redux';
import './card.css';

class Card extends Component {

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
          {Card.renderQuestionAlternative(question)}
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

Card.propTypes = {
  questionList: React.PropTypes.array.isRequired,
};

export default connect(mapStateToProps)(Card);
