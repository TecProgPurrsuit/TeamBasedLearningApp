import React, { Component } from 'react';
import TeacherListTail from '../teacherListTail';

class AvailableListItem extends Component {

  static answeredList() {
    // This component is used in case the question list has been answered
    return (
      <div className="card-action">
        <a className="activator">Ver respostas certas</a>
      </div>
    );
  }

  static unansweredList() {
  // This component is used in case the question list was not answered
    return (
      <div className="card-action">
        <a>Responder Questionário</a>
      </div>
    );
  }

  static checkIfAnswered(list) {
      // This function return a component according to if it's answered or not
    if (list.answered) {
      return <AvailableListItem.answeredList />;
    }
    return <AvailableListItem.unansweredList />;
  }

  static checkIfTeacher(currentUser, list) {
      // This function return a component according to if user is teacher or student
    if (currentUser.profile.is_teacher) {
      return (
        <div>
          {AvailableListItem.checkIfAnswered(list)};
        </div>
      );
    }
    return <TeacherListTail list={list} />;
  }

  static renderQuestionList(questionList) {
    // This component is a tab with all the questions of the available list
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

  static renderAlternativeAnswer(alternatives) {
    // This is a nested component that only return the answer data
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

  static renderQuestionListAlternatives(questionList) {
    // This component disposes the content under the tabs
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

AvailableListItem.propTypes = {
  list: React.PropTypes.object.isRequired,
  currentUser: React.PropTypes.object.isRequired,
};

export default AvailableListItem;
