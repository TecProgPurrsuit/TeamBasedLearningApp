/**
* This file is responsible for rendering the create list page.
*
* @summary Conteiner for creating lists.
*
* @link /create-list
* @class ListCreator
*/

import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuestionCreator from './questionCreator';
// Meteor comes from Meteor Library - No import needed (ESLINT issue)
/* global Meteor comes from Meteor Library */

require('./style/listCreatorStyle.css');

class ListCreator extends Component {
  constructor(props) {
    super(props);
    this.state = { questions: [] };

    this.setQuestion = this.setQuestion.bind(this);
    this.sendToDatabase = this.sendToDatabase.bind(this);
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.questions !== nextState.questions) {
      return true;
    }
    return false;
  }

  setQuestion(question) {
    const questions = this.state.questions;
    questions.push(question);
    this.setState({ questions });
  }

  // This function tries to send the data in state to the database
  sendToDatabase(event) {
    // The default action for the event will not be triggered.
    event.preventDefault();

    console.warn('Sending to database...');

    // check for any question, if there is any one save the list
    if (this.state.questions.length !== 0) {
      const title = this.listName.value.trim();
      const description = this.listDescription.value.trim();
      const enable = this.enable.checked;
      const disciplineSelect = document.getElementById('disciplineSelect');
      const discipline = disciplineSelect.options[disciplineSelect.selectedIndex].value;

      const list = { title,
        description,
        enable,
        questions: this.state.questions,
        discipline };

      // Insert the list object in database through Meteor Methods
      Meteor.call('lists.validateAndInsert', list);

      // reset the fields and the questions state
      this.setState({ questions: [] });
      this.resetListFields();
    } else {
    // Needed custom alert();
      console.warn('sendToDatabase: No questions were given.');
    }
  }

  resetListFields() {
    this.listName.value = '';
    this.listDescription.value = '';
    this.enable.checked = false;
  }

  render() {
    return (
      <div>
        <h1 id="titleHeader">Criar nova lista</h1>

        <form id="createListForm">
          <label htmlFor="listTitle">Título da lista:</label>
          <input
            id="listTitle"
            type="text"
            ref={(input) => { this.listName = input; }}
            className="inputForm"
          />

          <label htmlFor="listDescription">Descrição da lista:</label>
          <input
            id="listDescription"
            type="text"
            ref={(input) => { this.listDescription = input; }}
            className="inputForm"
          />
        </form>

        <label htmlFor="disciplineLabel">Selecione a disciplina</label>
        <div className="input-field">
          <select id="disciplineSelect" className="browser-default">
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
          <button className="waves-effect waves-light btn" onClick={this.sendToDatabase}>
            Salvar<i className="material-icons left">save</i>
          </button>
          &ensp;
          <button className="waves-effect waves-light btn">
            Cancelar<i className="material-icons left">clear</i>
          </button>
        </div>

      </div>
    );
  }
}

export default connect()(ListCreator);
