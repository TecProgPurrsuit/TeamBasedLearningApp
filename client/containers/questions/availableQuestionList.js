import React, { Component } from 'react';
import AvailableQuestion from './availableQuestion';


class AvailableQuestionList extends Component {
  render() {
    return (
      <div className="row">
        <div className="col l3" />
        <div className="col l6 s12">
          <ul>
            <AvailableQuestion />
          </ul>
        </div>
        <div className="col l3" />
      </div>
    );
  }
}

export default AvailableQuestionList;
