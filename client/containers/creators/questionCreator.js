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
    this.props.setQuestion(question);
    this.setState({ alternatives: [] });
    this.questionDescription.value = '';
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

        <div id="questionModal" className="modal">
          <div className="modal-content">
            <h4>Adicionar Questão</h4>
            <form>
              <label htmlFor="questionDescription" className="label">Descrição</label>
              <input id="questionDescription" type="text" ref={(input) => { this.questionDescription = input; }} placeholder="Digite aqui" />
            </form>

            <AlternativeCreator
              alternatives={this.state.alternatives}
              setQuestionAlternative={this.setQuestionAlternative}
            />

          </div>

          <br />

          <div id="modalFooter" className="modal-footer">
            <button className="modal-action modal-close waves-effect waves-green btn-flat">Cancelar</button>
            <button onClick={this.handleSubmit} className="modal-action modal-close waves-effect waves-green btn-flat">Adicionar</button>
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
