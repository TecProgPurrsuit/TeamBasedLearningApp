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
      resetInput: false,
      validate: false,
    };

    this.setQuestion = this.setQuestion.bind(this);
    this.setTitle = this.setTitle.bind(this);
    this.setDescription = this.setDescription.bind(this);
    this.sendToDatabase = this.sendToDatabase.bind(this);
  }

  // set the this.state.title to a title entered by the user on the text input field
  setTitle(title) {
    this.setState({ title });
  }

  // set the this.state.description to a description entered by the user on the text input field
  setDescription(description) {
    this.setState({ description });
  }

  // insert a new question in questions array
  setQuestion(question) {
    const questions = this.state.questions;
    questions.push(question);
    this.setState({ questions });
  }

  // return true if there is any empty field
  validateBlankFields() {
    this.setState({ validate: true });
    if (this.state.title !== ' ' && this.state.description !== ' ') {
      return true;
    }
    return false;
  }

  // This function tries to send the data in state to the database
  sendToDatabase(event) {
    // The default action for the event will not be triggered.
    event.preventDefault();

    const EMPTY = 0;
    const fieldsAreOk = this.validateBlankFields();
    const questionsAreOk = (this.state.questions.length !== EMPTY);
    const listIsValid = (fieldsAreOk && questionsAreOk);

    // check for any question, if there is any one save the list
    if (listIsValid) {
      const title = this.state.title.trim();
      const description = this.state.description.trim();
      const closed = false;
      const questions = this.state.questions;
      const enable = this.enable.checked;
      const disciplineSelect = document.getElementById('disciplineSelect');
      const discipline = disciplineSelect.options[disciplineSelect.selectedIndex].value;

      const list = {
        title,
        description,
        enable,
        closed,
        questions,
        discipline };

      // Insert the list object in database through Meteor Methods
      /* global Meteor */
      Meteor.call('lists.validateAndInsert', list);

      // reset the fields and state
      this.resetListFields();

      console.warn('Sending to database...');
    } else if (!fieldsAreOk) {
      // The inputs have inconsistencies
      this.setState({ valid: true });
      console.warn('Attempt to submit incomplete or incorrect form!');
    } else if (!questionsAreOk) {
    // Needed custom alert();
      console.warn('sendToDatabase: No questions were given.');
    } else {
      // nothing to do
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
            setText={this.setTitle}
            inputLabel="Título da Lista:"
            errorMessage="Por favor, preencha o título da lista!"
            resetInput={this.state.resetInput}
            validate={this.state.validate}
          />

          <TextInput
            id="description"
            setText={this.setDescription}
            inputLabel="Descrição da lista:"
            errorMessage="Por favor, preencha a descrição da lista!"
            resetInput={this.state.resetInput}
            validate={this.state.validate}
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
