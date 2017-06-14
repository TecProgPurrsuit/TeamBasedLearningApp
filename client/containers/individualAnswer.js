/**
* This file is where the individual answers is rendered.
*
* @summary Individual answers container.
*
* @link /individual-simulator
* @class IndividualAnswer
*/

import React from 'react';
import QuestionList from './questions/questionList';

function IndividualAnswer() {
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

export default IndividualAnswer;
