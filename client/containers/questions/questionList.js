/**
* This file is responsible for render a list os questions to the user
*
* @summary Component for a list of questions

  @class QuestionList
*/

import React, { Component } from 'react';
import Question from './question';


class QuestionList extends Component {
  render() {
    return (
      <div className="row">
        <div className="col l9 offset-l1 s12">
          <ul>
            <Question />
          </ul>
        </div>
      </div>
    );
  }
}

export default QuestionList;
