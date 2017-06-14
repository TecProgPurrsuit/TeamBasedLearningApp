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

// Insert stylesheet on components
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

    // Verify the type of answering to render group of alternatives
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
    } else {
      // do nothing
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

// Get the state of typeOfAnswering from redux
function mapStateToProps(state) {
  return {
    typeOfAnswering: state.typeOfAnswering,
  };
}

/* Especific the questionAlternatives and typeOfAnswering type and if it
is requered on system */
QuestionAlternatives.propTypes = {
  questionAlternatives: React.PropTypes.array.isRequired,
  typeOfAnswering: React.PropTypes.string.isRequired,
};

// Export the QuestionAlternatives component
export default connect(mapStateToProps)(QuestionAlternatives);
