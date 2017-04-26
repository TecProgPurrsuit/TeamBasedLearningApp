/**
* This file is responsible for render the organized table of available questions.
*
* @summary All components of AvailalableQuestion and disposes in a table
*
  @class AvailableQuestionList
*/

import React, { Component } from 'react';
import AvailableQuestion from './availableQuestion';


class AvailableQuestionList extends Component {
  // This component only displays available question list in table
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
