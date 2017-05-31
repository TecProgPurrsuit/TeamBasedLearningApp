/**
* This file is responsible for rendering the create list page.
*
* @summary Container for creating lists.
*
* @link /create-list
* @class ListCreator
*/

import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuestionCreator from './questionCreator';
import TextInput from './textInput';
// Meteor comes from Meteor Library - No import needed (ESLINT issue)

require('./style/listCreatorStyle.css');

class ListCreator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ' ',
      description: ' ',
      discipline: ' ',
      enabled: false,
      questions: [],
      valid: false,
      resetInput: false,
    };

    this.setQuestion = this.setQuestion.bind(this);
    this.setTitle = this.setTitle.bind(this);
    this.setDescription = this.setDescription.bind(this);
    this.setValid = this.setValid.bind(this);
    this.sendToDatabase = this.sendToDatabase.bind(this);
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.questions !== nextState.questions) {
      return true;
    }
    return false;
  }

  setTitle(title) {
    this.setState({ title });
  }

  setDescription(description) {
    this.setState({ description });
  }

  setQuestion(question) {
    const questions = this.state.questions;
    questions.push(question);
    this.setState({ questions });
  }

  setValid(validOrNot) {
    this.setState({ valid: validOrNot });
  }

  // This function tries to send the data in state to the database
  sendToDatabase(event) {
    // The default action for the event will not be triggered.
    event.preventDefault();
    const EMPTY = 0;
    const listIsValid = (this.state.valid && (this.state.questions.length !== EMPTY));

    // check for any question, if there is any one save the list
    if (listIsValid) {
      const title = this.state.title.trim();
      const description = this.listDescription.value.trim();
      const enable = this.enable.checked;
      const disciplineSelect = document.getElementById('disciplineSelect');
      const discipline = disciplineSelect.options[disciplineSelect.selectedIndex].value;

      const list = {
        title,
        description,
        enable,
        questions: this.state.questions,
        discipline,
      };

      // Insert the list object in database through Meteor Methods
      /* global Meteor */
      Meteor.call('lists.validateAndInsert', list);

      // reset the fields and the questions state
      this.setState({ questions: [] });
      this.resetListFields();

      console.warn('Sending to database...');
    } else if (!this.state.valid) {
      // The inputs have inconsistencies
      console.warn('Attempt to submit incomplete or incorrect form!');
    } else {
    // Needed custom alert();
      console.warn('sendToDatabase: No questions were given.');
    }
  }

  resetListFields() {
    this.setState({
      title: ' ',
      description: ' ',
      discipline: ' ',
      enabled: false,
      questions: [],
      valid: false,
      resetInput: true,
    });
  }

  render() {
    return (
      <div>
        <h1 id="titleHeader">Criar nova lista</h1>

        <form id="createListForm" onSubmit={this.sendToDatabase}>
          <TextInput
            id="title"
            value={this.state.title}
            setValid={this.setValid}
            setText={this.setTitle}
            inputLabel="Título da Lista:"
            errorMessage="Por favor, preencha o título da lista!"
            resetInput={this.state.resetInput}
          />

          <TextInput
            id="description"
            value={this.state.description}
            setValid={this.setValid}
            setText={this.setDescription}
            inputLabel="Descrição da lista:"
            errorMessage="Por favor, preencha a descrição da lista!"
            resetInput={this.state.resetInput}
          />

          <label htmlFor="disciplineLabel">Selecione a disciplina</label>
          <div className="input-field">
            <select id="disciplineSelect" className="browser-default" required>
              <option value="" disabled selected>-- Disciplina --</option>
              <option value="Medição e Análise">Medição e Análise</option>
              <option value="Requisitos de Software">Requisitos de Software</option>
            </select>
          </div>
          <br />

          <div className="switch">
            <label htmlFor="enable">
              Não disponível
              <input
                id="enable"
                type="checkbox"
                ref={(input) => { this.enable = input; }}
              />
              <span className="lever" />
              Disponível
            </label>
          </div>

          <br />

          <QuestionCreator questions={this.state.questions} setQuestion={this.setQuestion} />

          <div className="center-align">
            <button type="submit" className="waves-effect waves-light btn">
              Salvar<i className="material-icons left">save</i>
            </button>
            &ensp;
            <button className="waves-effect waves-light btn">
              Cancelar<i className="material-icons left">clear</i>
            </button>
          </div>

        </form>

      </div>
    );
  }
}

export default connect()(ListCreator);
