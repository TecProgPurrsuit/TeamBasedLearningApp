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

    const title = this.listName.value.trim();
    this.listName.value = '';
    const description = this.listDescription.value.trim();
    this.listDescription.value = '';
    const enable = this.enable.checked;
    this.enable.checked = false;

    const list = { title,
      description,
      enable,
      questions: this.state.questions,
      discipline: '' };

    // Insert the list object in database through Meteor Methods
    Meteor.call('lists.validateAndInsert', list);

    this.setState({ questions: [] });
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
