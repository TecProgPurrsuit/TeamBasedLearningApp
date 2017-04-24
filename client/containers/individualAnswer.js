/**
* This file is where the individual answers is rendered.
*
* @summary Individual answers container.
*
* @link /individual-simulator
* @class IndividualAnswering
*/

import React, { Component } from 'react';
import QuestionList from './questions/questionList';

class IndividualAnswer extends Component {

  render() {
    return (
      <div className="row">
        <div className="col s12">
          <QuestionList />
          <div className="row">
            <div className="col s4" />
            <div className="col s4" >
              <button className="btn waves-effect waves-light green" type="submit" name="action">
                Enviar Respostas
                <i className="material-icons right">send</i>
              </button>
            </div>
            <div className="col s4" />
          </div>
        </div>
      </div>
    );
  }
}

export default IndividualAnswer;
