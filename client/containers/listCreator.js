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
import { Link } from 'react-router';
import Lists from '../../lib/collections/listsCollection';

class ListCreator extends Component {
  constructor(props) {
    super(props);
    this.state = { listName: '', listDescription: '', questions: '' };

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

    Lists.insert(this.state, (error, result) => {
      // If the data in state does not match with the List Schema, it will raise
      // an error.
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
        <form>
          <label>
            Título da lista:
            <input
              type="text" value={this.state.listName}
              name="listName"
              onChange={this.handleChange}
            />
          </label>

          <label>
            Descrição da lista:
            <input
              type="text" value={this.state.listDescription}
              name="listDescription"
              onChange={this.handleChange}
            />
          </label>
        </form>

        <a className="waves-effect waves-light btn" onClick={this.sendToDatabase}>
          Salvar Lista
        </a>
        <Link to={'/'}>
          <div className="waves-effect waves-light btn">
            Adicionar Questão
          </div>
        </Link>

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
