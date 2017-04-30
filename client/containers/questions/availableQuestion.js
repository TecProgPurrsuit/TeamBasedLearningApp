/**
* This file is responsible for create and organize componets and child
*   components to show the available questions and templet when needed.
*
* @summary Separate components of all available questions list
*
  @class AvailableQuestion
*/

import React, { Component } from 'react';
import { connect } from 'react-redux';

class AvailableQuestion extends Component {
// This class manages all components of available questions
  renderAvailableQuestions() {
    const QUESTIONS = this.props.questionListData;

    let availableQuestions = [];
    availableQuestions = filterAvailableQuestions(QUESTIONS);

    return availableQuestions.map((question) => {
      return (
        <div className="card available-card-container"key={question.description}>
          <div className="card-content available-card">
            <span className="card-title grey-text text-darken-4">
              {question.title}
            </span>
            <div className="card-stacked">
              <div className="card-content available-card">
                <p>{question.description}</p>
              </div>
              <div className="available-card-button">
                {this.checkIfAnswered(question) }
              </div>
            </div>
          </div>
          <div className="card-reveal">
            <span className="card-title grey-text text-darken-4"><i className="material-icons right">close</i></span>
            <div className="card-tabs">
              <ul className="tabs tabs-fixed-width">
                {this.renderTempletCardTabs(question.questions)}
              </ul>
            </div>
            <div className="card-content grey lighten-4">
              {this.renderTempletTabContent(question.questions)}
            </div>
          </div>
        </div>

      );
    });
  }


  render() {
    return (
      <div>
        {this.renderAvailableQuestions()}
      </div>
    );
  }

  renderIcon() {
    return (
      <div>Function called</div>
    )
  }

  answeredQuestion(props) {
    // This component is used in case the question list has been answered
    return (
      <div className="card-action">
        <a className="activator">Ver respostas certas</a>
      </div>
    );
  }

  unansweredQuestion(props) {
    // This component is used in case the question list was not answered
    return (
      <div className="card-action">
        <a>Responder Questionário</a>
      </div>
    );
  }

  checkIfAnswered(question) {
    // This function return a component according to if it's answered or not
    if (question.answered) {
      return <this.answeredQuestion />;
    } else {
      // nothing to do
    }
    return <this.unansweredQuestion />;
  }

  renderAnswer(templet){
    // This is a nested component that only return the answer data
    return templet.map((question) => {
      return (
        <a href="#" className="collection-item">
          <span className="badge">
            {question.alternativePoints}
          </span>
          {question.alternativeDescription}
        </a>
      );
    });
  }

  renderTempletCardTabs(questionList) {
    // This component is a tab with all the questions of the available list
    return questionList.map((question) => {
      return (
        <div key={question.id}>
          <li className="tab">
            <a href={'#' + question.id} className="active">{'Questão: ' + question.id}</a>
          </li>
        </div>
      );
    });
  }

  renderTempletTabContent(questionList) {
    // This component disposes the content under the tabs
    return questionList.map((question) => {
      return (
        <div key={question.id} id={question.id}>
          {question.description}
          <div className="collection">
            {this.renderAnswer(question.alternatives)}
          </div>
        </div>
      );
    });
  }
}

function mapStateToProps(state) {
  return {
    questionListData: state.questionListData,
  };
}

function filterAvailableQuestions(allQuestions) {
  // This function separate available question lists from all question lists
  const AVAIABLEQUESTIONS = [];

  allQuestions.map((question) => {
    if (question.enable) {
      AVAIABLEQUESTIONS.push(question);
    }
  });

  return AVAIABLEQUESTIONS;
}

AvailableQuestion.propTypes = {
  questionListData: React.PropTypes.array.isRequired,
};

export default connect(mapStateToProps)(AvailableQuestion);
