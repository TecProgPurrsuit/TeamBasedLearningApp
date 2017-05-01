/**
* This file is responsible for render the questions' alternatives.
*
* @summary Component for questions' alternatives.

  @class QuestionAlternatives
*/

import React, { Component } from 'react';
import { connect } from 'react-redux';
import GroupAlternative from '../alternatives/groupAlternative';
import IndividualAlternative from '../alternatives/individualAlternative';

require('./style/question.css');

class QuestionAlternatives extends Component {
  static renderIndividualAlternatives(questionAlternatives) {
    return questionAlternatives.map((alternative) => {
      return (
        <IndividualAlternative
          alternative={alternative}
          key={alternative.alternativeDescription}
        />
      );
    });
  }

  static renderGroupAlternatives(questionAlternatives) {
    return questionAlternatives.map((alternative) => {
      return (
        <GroupAlternative
          alternative={alternative}
          key={alternative.alternativeDescription}
        />
      );
    });
  }

  constructor(props) {
    super(props);
    this.state = { alternativeStyle: { } };
  }

  clearAlternativeStyle() {
    this.setState({ alternativeStyle: false });
  }

  renderQuestionAlternative(questionAlternatives) {
    let typeOfAlternative = (
      <div className="progress">
        <div className="indeterminate" />
      </div>
    );
    if (this.props.typeOfAnswering === 'GroupAnswering') {
      typeOfAlternative = (
        <div>
          {QuestionAlternatives.renderGroupAlternatives(questionAlternatives)}
        </div>
      );
    } else if (this.props.typeOfAnswering === 'IndividualAnswering') {
      typeOfAlternative = (
        <div>
          {QuestionAlternatives.renderIndividualAlternatives(questionAlternatives)}
        </div>
      );
    }
    return typeOfAlternative;
  }

  render() {
    return (
      <div>
        {this.renderQuestionAlternative(this.props.questionAlternatives)}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    typeOfAnswering: state.typeOfAnswering,
  };
}

QuestionAlternatives.propTypes = {
  questionAlternatives: React.PropTypes.array.isRequired,
  typeOfAnswering: React.PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(QuestionAlternatives);
