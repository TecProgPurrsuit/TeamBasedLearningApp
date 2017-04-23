import React, { Component } from 'react';
import { connect } from 'react-redux';
import GroupAlternative from './groupAlternative';

require('./style/question.css');

class QuestionAlternatives extends Component {
  constructor(props) {
    super(props);
    this.renderQuestionAlternative = this.renderQuestionAlternative.bind(this);
    this.renderGroupAlternatives = this.renderGroupAlternatives.bind(this);
    this.state = { alternativeStyle: { } };
  }
  renderQuestionAlternative(questionAlternatives) {
    if (this.props.typeOfAnswering === 'GA') {
      return (
        <div>
          {this.renderGroupAlternatives(questionAlternatives)}
        </div>
      );
    } else if (this.props.typeOfAnswering === 'IA') {
      // QuestionAlternatives.renderIndividualAlternatives(questionAlternatives);
    }
  }

  clearAlternativeStyle() {
    this.setState({ alternativeStyle: false });
  }

  renderGroupAlternatives(questionAlternatives) {
    return questionAlternatives.map((alternative) => {
      return (
        <GroupAlternative
          alternative={alternative}
          key={alternative.alternativeDescription}
        />
      );
    });
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
