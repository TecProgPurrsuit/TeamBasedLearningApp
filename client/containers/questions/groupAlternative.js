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
    /**
     * @summary Applying the alternative's style according to the user's answer.
     *
     * The alternative's style is changed to a special style according to the
       user's answer: if it's a correct answer, so the style is formated to the
       CORRECT_ANSWER_STYLE, the same for a wrong answer, that the style will be
       WRONG_ANSWER_STYLE.
     *
     * @param Alternative alternative The alternative that the answer will be analized.
    */

    const CORRECT_ANSWER_COLOR = 'green';
    const WRONG_ANSWER_COLOR = 'red';
    const WRONG_ANSWER = 0;
    const CORRECT_ANSWER_STYLE = {
      backgroundColor: CORRECT_ANSWER_COLOR,
    };
    const WRONG_ANSWER_STYLE = {
      backgroundColor: WRONG_ANSWER_COLOR,
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
    const ANTERNATIVE_ALREADY_SELECTED_WARN = 'Alternative was already selected.';

    if (!this.state.wasSelected) {
      this.showAnswerResults(alternative);
      this.state.wasSelected = true;
    } else {
      console.warn(ANTERNATIVE_ALREADY_SELECTED_WARN);
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
