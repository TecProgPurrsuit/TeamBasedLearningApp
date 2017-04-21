import React, { Component, PropTypes } from 'react';
import { Link, browserHistory } from 'react-router';
import './authentication.css';

class Register extends Component {

  constructor(props) {
    super(props);
    this.state = {error: ''};
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    let registration_number = document.getElementById('signup-registration_number').value;
    let password = document.getElementById('signup-password').value;
    let email = document.getElementById('signup-email').value;
    let name = document.getElementById('signup-name').value;
    let group = document.getElementById('signup-group').value;
    let name_of_class = document.getElementById('signup-class').value;
    this.setState({error: ''});
    let user = {
      username: registration_number,
      password: password,
      profile: {
        name: name,
        email: email,
        group: group,
        name_of_class: name_of_class,
        is_teacher: false
      }
    }
    Meteor.call('userInsert', user)
  }

  render() {
    const error = this.state.error;
    return (
      <div className="register-form">
        <h1>Cadastro</h1>
        <div className="error">
          { error.length > 0 ?
            <div className="card-panel red lighten-3">{error}</div>
            : ''
          }
        </div>
        <form onSubmit={this.handleSubmit}>
          <input
            name="name"
            type="text"
            id="signup-name"
            className="input-field white-text"
            placeholder="Nome"
            autoComplete="off"
            required
            autoFocus /><br />
          <input
            id="signup-group"
            list="groups"
            name="group"
            className="white-text"
            pattern="(Grupo [0-9]+)"
            title="Escolha uma das alternativas"
            required
            placeholder="Grupos" />
            <datalist id="groups">
              <option value="Grupo 01" />
              <option value="Grupo 02" />
              <option value="Grupo 03" />
              <option value="Grupo 04" />
              <option value="Grupo 05" />
            </datalist>
          <input
            id="signup-class"
            list="classes"
            name="class"
            className="white-text"
            placeholder="Disciplinas" />
            <datalist id="classes">
              <option value="Medição e Análise" />
              <option value="Requisitos" />
            </datalist>
          <input
            name="username"
            type="text"
            id="signup-registration_number"
            className="input-field white-text"
            placeholder="Matrícula"
            autoComplete="off"
            pattern="[0-9]{9}"
            title="Matricula da UnB - 9 digitos"
            required /><br />
          <input
            name="email"
            type="email"
            id="signup-email"
            className="input-field white-text validate"
            placeholder="Email"
            autoComplete="off"
            required /><br />
          <input
            name="password"
            type="password"
            id="signup-password"
            className="input-field white-text"
            placeholder="Senha"
            autoComplete="off"
            required />
          <button type="submit" className="waves-effect waves-light btn teal darken-4 button-center">
            <i className="material-icons left">send</i>
            Registrar
          </button>
        </form>
      </div>
    );
  }
}

export default Register;
