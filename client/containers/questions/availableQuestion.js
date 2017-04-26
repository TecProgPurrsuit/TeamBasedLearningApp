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

  renderAvailableQuestions() {
    const questions = this.props.questionListData;

    var available_questions = [];
    available_questions = filterAvailableQuestions(questions);

    return available_questions.map((question) => {
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

  renderIcon(){
    console.log("came here")
    return(
      <div>Function called</div>
    )
  }

  answeredQuestion(props) {
    return(
      <div className="card-action">
        <a className="activator">Ver respostas certas</a>
      </div>
    );
  }

  unansweredQuestion(props) {
    return(
      <div className="card-action">
        <a>Responder Questionário</a>
      </div>
    );
  }

  checkIfAnswered(question) {
    if (question.answered) {
      return <this.answeredQuestion />;
    }else{
      // nothing to do
    }
    return <this.unansweredQuestion />;
  }

  renderAnswer(templet){
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

  renderTempletCardTabs(questionList){
    return questionList.map((question) => {
      return (
        <div key={question.id}>
          <li className="tab">
            <a href={"#"+question.id} className="active">{"Questão: "+ question.id}</a>
          </li>
        </div>
      );
    });
  }

  renderTempletTabContent(questionList){
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

function filterAvailableQuestions (allQuestions) {
  var available_questions = [];

  allQuestions.map((question) => {
    if (question.available) {
      available_questions.push(question);
    }
  })

  return available_questions;
}

AvailableQuestion.propTypes = {
  questionListData: React.PropTypes.array.isRequired,
};

export default connect(mapStateToProps)(AvailableQuestion);
