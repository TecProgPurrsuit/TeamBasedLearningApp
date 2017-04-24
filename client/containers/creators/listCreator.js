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
import { LISTSDB } from '../../../lib/collections/listsCollection';
import QuestionCreator from './questionCreator';

class ListCreator extends Component {
  constructor(props) {
    super(props);
    this.state = { listName: '', listDescription: '', questions: [] };

    this.handleChange = this.handleChange.bind(this);
    this.sendToDatabase = this.sendToDatabase.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const targetValue = target.value;
    const name = target.name;

    // This is needed for react identify which form the user is typing.
    this.setState({
      [name]: targetValue,
    });
  }

  sendToDatabase(event) {
    console.log('Sending to database...');

    /** If the data in state does not match with the List Schema, it will raise
    *   an error.
    */
    LISTSDB.insert(this.state, (error, result) => {
      alert('Verifique se todos os campos foram preenchidos corretamente' +
        ', por favor.');
    });

    console.log('Data did not pass on schema validation...');

    // The default action for the event will not be triggered.
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <h1>Criar nova lista</h1>
        <form id="createListForm">
          <label htmlFor="listTitle">Título da lista:</label>
          <input
            id="listTitle"
            type="text" value={this.state.listName}
            name="listName"
            onChange={this.handleChange}
          />

          <label htmlFor="listDescription">Descrição da lista:</label>
          <input
            id="listDescription"
            type="text" value={this.state.listDescription}
            name="listDescription"
            onChange={this.handleChange}
          />
        </form>

        <QuestionCreator />

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

function mapStateToProps(state) {
  return {
    listName: state.listName,
    listDescription: state.listDescription,
    questions: state.questions,
  };
}

export default connect(mapStateToProps)(ListCreator);