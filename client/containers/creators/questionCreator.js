/**
* This file is responsible for rendering the create question modal.
*
* @summary Component for creating questions.
*
* @class QuestionCreator
*/

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AlternativeCreator from './alternativeCreator';
import AlternativeQuestionList from './alternativeQuestionList';

class QuestionCreator extends Component {

  static openQuestionModal() {
    /* global $, jQuery*/
    $(document).ready(() => {
      // the data-target of .modal-trigger must specify the modal ID that wants to be triggered
      $('.modal').modal();
      $('.modal').modal('open');
    });
  }

  constructor(props) {
    super(props);

    this.state = { alternatives: [] };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.setQuestionAlternative = this.setQuestionAlternative.bind(this);
    this.checkForAnyCorrectAlternative = this.checkForAnyCorrectAlternative.bind(this);
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.props.questions !== nextProps.questions) {
      return true;
    }
    if (this.state.alternatives !== nextState.alternatives) {
      return true;
    }
    return false;
  }

  setQuestionAlternative(questionAlternative) {
    const alternativesArray = this.state.alternatives.slice();
    alternativesArray.push(questionAlternative);
    this.setState({ alternatives: alternativesArray });
  }

  handleSubmit(event) {
    event.preventDefault();

    const description = this.questionDescription.value.trim();
    const question = { description, alternatives: this.state.alternatives };

    /* if there isn't any correct alternatives or if the number of alternatives
     created is less than 2, alert the user */
    if (!this.checkForAnyCorrectAlternative()) {
      // alert user (create some way of alert here)
      // alert('não há nenhuma alternativa correta');
    } else if (this.state.alternatives.length < 2) {
      // alert user (create some way of alert here)
      // alert('é necessário ao menos 2 ou mais alternativas');
    } else {
      // if everything is ok, create the question
      this.props.setQuestion(question);
      this.setState({ alternatives: [] });
      this.questionDescription.value = '';
      /* global $, jQuery*/
      $('#questionModal').modal('close');
    }
  }

  checkForAnyCorrectAlternative() {
    let anyCorrect = false;
    this.state.alternatives.map((alternative) => {
      if (alternative.alternativePoints > 0) {
        anyCorrect = true;
      }
      return 0;
    });
    return anyCorrect;
  }

  render() {
    return (
      <div>
        <div id="modalTrigger" className="center-align">
          <button
            onClick={QuestionCreator.openQuestionModal} data-target="questionModal"
            className="waves-effect waves-light btn"
            id="addButton"
          >
            Adicionar Questão<i className="material-icons left">add</i>
          </button>
        </div>

        <AlternativeQuestionList
          listName={'Questões'}
          items={this.props.questions}
        />

        <div id="questionModal" className="modal modal-fixed-footer">
          <div className="modal-content">
            <h4>Adicionar Questão</h4>
            <form>
              <label htmlFor="questionDescription" className="label">Descrição</label>
              <input id="questionDescription" type="text" ref={(input) => { this.questionDescription = input; }} placeholder="Digite aqui" />
            </form>

            <AlternativeCreator
              alternatives={this.state.alternatives}
              checkForAnyCorrectAlternative={this.checkForAnyCorrectAlternative}
              setQuestionAlternative={this.setQuestionAlternative}
            />

          </div>

          <br />

          <div id="modalFooter" className="modal-footer">
            <button className="modal-action modal-close waves-effect waves-green btn-flat">Cancelar</button>
            <button onClick={this.handleSubmit} className="modal-action waves-effect waves-green btn-flat">Adicionar</button>
          </div>
        </div>
      </div>
    );
  }
}

QuestionCreator.propTypes = {
  setQuestion: PropTypes.func.isRequired,
  questions: PropTypes.array.isRequired,
};

export default QuestionCreator;
