/**
* This file is responsible for show to the user the avaiable lists itens
*
* @summary All itens of avaiable list.
*
*/

import React, { Component } from 'react';
import TeacherListTail from '../teacherListTail';

class AvailableListItem extends Component {

  // This component is used in case the question list has been answered
  static answeredList() {
    return (
      <div className="card-action">
        <a className="activator">Ver respostas certas</a>
      </div>
    );
  }

  // This component is used in case the question list was not answered
  static unansweredList() {
    return (
      <div className="card-action">
        <a>Responder Questionário</a>
      </div>
    );
  }

  // This function return a component according to if it's answered or not
  static checkIfAnswered(list) {
    if (list.answered) {
      return <AvailableListItem.answeredList />;
    } else {
      return <AvailableListItem.unansweredList />;
    }
  }

  // This function return a component according to if user is teacher or student
  static checkIfTeacher(currentUser, list) {
    if (currentUser.profile.is_teacher) {
      return <TeacherListTail list={list} />;
    } else {
      return (
        <div>
          {AvailableListItem.checkIfAnswered(list)};
        </div>
      );
    }
  }

  // This component is a tab with all the questions of the available list
  static renderQuestionList(questionList) {
    return questionList.map((question) => {
      return (
        <div key={question.description}>
          <li className="tab">
            <a href="" className="active">{`Questão ${question.id}`}</a>
          </li>
        </div>
      );
    });
  }

  // This is a nested component that only return the answer data
  static renderAlternativeAnswer(alternatives) {
    return alternatives.map((alternative) => {
      return (
        <a href="" className="collection-item" key={alternative.alternativeDescription}>
          <span className="badge">
            {alternative.alternativePoints}
          </span>
          {alternative.alternativeDescription}
        </a>
      );
    });
  }

  // This component disposes the content under the tabs
  static renderQuestionListAlternatives(questionList) {
    return questionList.map((question) => {
      return (
        <div key={question.description}>
          {question.description}
          <div className="collection">
            {AvailableListItem.renderAlternativeAnswer(question.alternatives)}
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <div className="card available-card-container" key={this.props.list.description}>
        <div className="card-content available-card">
          <span className="card-title grey-text text-darken-4">
            {this.props.list.title}
          </span>
          <div className="card-stacked">
            <div className="card-content available-card">
              <p>{this.props.list.description}</p>
            </div>
            <div className="available-card-button">
              {AvailableListItem.checkIfTeacher(this.props.currentUser, this.props.list)}
            </div>
          </div>
        </div>
        <div className="card-reveal">
          <span className="card-title grey-text text-darken-4"><i className="material-icons right">close</i></span>
          <div className="card-tabs">
            <ul className="tabs tabs-fixed-width">
              {AvailableListItem.renderQuestionList(this.props.list.questions)}
            </ul>
          </div>
          <div className="card-content grey lighten-4">
            {AvailableListItem.renderQuestionListAlternatives(this.props.list.questions)}
          </div>
        </div>
      </div>
    );
  }
}

// Especify the list and currentUser type and if it is requered on system
AvailableListItem.propTypes = {
  list: React.PropTypes.object.isRequired,
  currentUser: React.PropTypes.object.isRequired,
};

// Export the AvailableListItem component
export default AvailableListItem;
