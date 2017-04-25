/**
* This file is responsible for render a single question's alternative of a group answering.
*
* @summary Componente for a single alternative.

  @class GroupAlternative
*/

import React, { Component } from 'react';

class GroupAlternative extends Component {
  constructor(props) {
    super(props);
    this.state = { alternativeStyle: null, wasSelected: false };
    this.groupAnswerListener = this.groupAnswerListener.bind(this);
  }

  showAnswerResults(alternative) {
    const WRONG_ANSWER = 0;
    const CORRECT_ANSWER_STYLE = {
      backgroundColor: 'green',
    };
    const WRONG_ANSWER_STYLE = {
      backgroundColor: 'red',
    };
    if (this.state.alternativeStyle) {
      this.setState({ alternativeStyle: null });
    } else if (alternative.alternativePoints !== WRONG_ANSWER) {
      this.setState({ alternativeStyle: CORRECT_ANSWER_STYLE });
    } else {
      this.setState({ alternativeStyle: WRONG_ANSWER_STYLE });
    }
  }

  groupAnswerListener(alternative) {
    if (this.state.wasSelected) {
      console.warn('Alternative was already selected.');
    } else {
      this.showAnswerResults(alternative);
      this.state.wasSelected = true;
    }
  }

  render() {
    return (
      <div
        className="card-action"
        key={this.props.alternative.alternativeDescription}
        onClick={() => this.groupAnswerListener(this.props.alternative)}
        style={this.state.alternativeStyle}
      >
        <a className="collection-item black-text">
          {this.props.alternative.alternativeDescription}
        </a>

      </div>
    );
  }
}

GroupAlternative.propTypes = {
  alternative: React.PropTypes.object.isRequired,
};
export default GroupAlternative;
