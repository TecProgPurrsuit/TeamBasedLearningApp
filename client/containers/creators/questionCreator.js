/**
* This file is responsible for rendering the create question modal.
*
* @summary Component for creating questions.
*
* @class QuestionCreator
*/

import React, { Component } from 'react';
import AlternativeCreator from './alternativeCreator';

class QuestionCreator extends Component {

  openQuestionModal() {
    $(document).ready(() => {
      // the data-target of .modal-trigger must specify the modal ID that wants to be triggered
      $('.modal').modal();
    });
  }

  render() {
    return (
      <div>
        <div id="modalTrigger" className="center-align">
          <button
            onClick={this.openQuestionModal} data-target="questionModal"
            className="waves-effect waves-light btn"
            id="addButton"
          >
            Adicionar Questão<i className="material-icons left">add</i>
          </button>
        </div>

        <ul id="questionList" className="collection with-header">
          <li className="collection-header">
            Questões
          </li>
          <li className="collection-item">
            <div>
              01.
              <a href="#!" className="secondary-content"><i className="material-icons">delete</i></a>
              <a href="#!" className="secondary-content"><i className="material-icons">edit</i>&ensp;</a>
            </div>
          </li>
        </ul>

        <div id="questionModal" className="modal">
          <div className="modal-content">
            <h4>Adicionar Questão</h4>
            <form>
              <label htmlFor="questionDescription" className="label">Descrição</label>
              <input id="questionDescription" type="text" placeholder="Digite aqui" />
            </form>

            <AlternativeCreator />

          </div>

          <br />

          <div id="modalFooter" className="modal-footer">
            <button className="modal-action modal-close waves-effect waves-green btn-flat">Cancelar</button>
            <button className="modal-action modal-close waves-effect waves-green btn-flat">Adicionar</button>
          </div>
        </div>
      </div>
    );
  }
}

export default QuestionCreator;
