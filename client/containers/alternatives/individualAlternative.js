/**
* This file is responsible for render a single question's alternative of a group answering.
*
* @summary Component for a single alternative in individual answering context.

  @class IndividualAlternative
*/

import React, { Component } from 'react';
import IndividualAlternativeValue from './individualAlternativeConfirmation';


class IndividualAlternative extends Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

  render() {
    return (
      <div>
        <div
          className="card-action"
          key={this.props.alternative.alternativeDescription}
          style={this.state.alternativeStyle}
        >
          <a className="collection-item black-text">
            {this.props.alternative.alternativeDescription}
          </a>
          <IndividualAlternativeValue />
        </div>
      </div>
    );
  }
}

// Especify the connectUser type
IndividualAlternative.propTypes = {
  alternative: React.PropTypes.object.isRequired,
};

// export IndividualAlternative component
export default IndividualAlternative;
