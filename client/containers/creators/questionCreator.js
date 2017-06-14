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

class QuestionCreator extends Component {

  static openQuestionModal() {
    /* jQuery $*/
    $(document).ready(() => {
      // the data-target of .modal-trigger must specify the modal ID that wants to be triggered
      $('.modal').modal();
      $('.modal').modal('open');
    });
  }

  constructor(props) {
    super(props);
    this.state = { alternatives: [] };

    // Finding the input and run the randleInputs and handleSubmit function
    // ESLint requirement
    this.handleSubmit = this.handleSubmit.bind(this);
    this.setQuestionAlternative = this.setQuestionAlternative.bind(this);
    this.checkForAnyCorrectAlternative = this.checkForAnyCorrectAlternative.bind(this);
  }

  shouldComponentUpdate(nextProps, nextState) {
    const isNextQuestion = this.props.questions !== nextProps.questions;
    const isNextState = this.state.alternatives !== nextState.alternatives;
    if (isNextQuestion || isNextState) {
      return true;
    } else {
      return false;
    }
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
      /* global $*/
      $('#questionModal').modal('close');
    }
  }

  checkForAnyCorrectAlternative() {
    let anyCorrect = false;
    this.state.alternatives.map((alternative) => {
      if (alternative.alternativePoints > 0) {
        anyCorrect = true;
      } else {
        // Do nothing
      }
      return 0;
    });
    return anyCorrect;
  }

  // Render all the questions which being created on the list creating screen
  renderQuestions() {
    const questions = this.props.questions;
    return questions.map((question, index) => {
      return (
        // Verify if the question.description is a secure props key
        <li key={question.description} className="collection-item">
          <div>
            Questão #{index + 1}
            <a href="#!" className="secondary-content"><i className="material-icons">delete</i></a>
            <a href="#!" className="secondary-content"><i className="material-icons">edit</i>&ensp;</a>
          </div>
        </li>
      );
    });
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

        <ul id="questionList" className="collection with-header">
          <li className="collection-header">
            Questões
          </li>
          {this.renderQuestions()}
        </ul>

        <div id="questionModal" className="modal modal-fixed-footer">
          <div className="modal-content">
            <h4>Adicionar Questão</h4>
            <label htmlFor="questionDescription" className="label">Descrição</label>
            <input id="questionDescription" type="text" ref={(input) => { this.questionDescription = input; }} placeholder="Digite aqui" />

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

// Especify the attributes type
QuestionCreator.propTypes = {
  setQuestion: PropTypes.func.isRequired,
  questions: PropTypes.array.isRequired,
};

// Export QuestionCreator component
export default QuestionCreator;
