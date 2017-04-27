/**
* This file is responsible for rendering the create list page.
*
* @summary Conteiner for creating lists.
*
* @link /create-list
* @class ListCreator
*/

import React, { Component } from 'react';
// import { LISTSDB } from '../../../lib/collections/listsCollection';
import QuestionCreator from './questionCreator';

require('./style/listCreatorStyle.css');

class ListCreator extends Component {
  constructor(props) {
    super(props);
    this.state = { listName: '',
      listDescription: '',
      enable: false,
      questions: [],
    };

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
    this.setState({ /*  listName, listDescription, enable,*/questions });
  }
  /*
  // This function tries to send the data in state to the database
  sendToDatabase(event) {
    console.warn('Sending to database...');

    LISTSDB.insert(this.state, (error, result) => {
      alert('Verifique se todos os campos foram preenchidos corretamente' +
        ', por favor.');
      console.warn('Data did not pass on schema validation...');
    });

    // The default action for the event will not be triggered.
    event.preventDefault();
  }
  */

  render() {
    return (
      <div>
        <h1 id="titleHeader">Criar nova lista</h1>

        <form id="createListForm">
          <label htmlFor="listTitle">Título da lista:</label>
          <input
            id="listTitle"
            type="text" value={this.state.listName}
            name="listName"
            onChange={this.handleChange}
            className="inputForm"
          />

          <label htmlFor="listDescription">Descrição da lista:</label>
          <input
            id="listDescription"
            type="text" value={this.state.listDescription}
            name="listDescription"
            onChange={this.handleChange}
            className="inputForm"
          />
        </form>

        <div className="switch">
          <label htmlFor="enableSwitch">
            Não disponível
            <input
              type="checkbox"
              name="enable"
              onChange={this.handleEnableChange}
              checked={this.state.enable}
            />
            <span className="lever" />
            Disponível
          </label>
        </div>
        <br />

        <QuestionCreator setQuestion={this.setQuestion} />

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

export default ListCreator;
