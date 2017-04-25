import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import CustomInput from '../customInput';
import CustomButton from '../customButton';
import CustomError from '../customError';
import './authentication.css';

class Register extends Component {

  constructor() {
    super();
    this.state = {
      error: '',
      registration_number: '',
      password: '',
      email: '',
      name: '',
      group: '',
      name_of_class: '',
      classes: [],
      groups: [],
    };
  }

  handleSubmit(event) {
    event.preventDefault();
    const user = {
      username: this.state.registration_number,
      password: this.state.password,
      profile: {
        name: this.state.name,
        email: this.state.email,
        group: this.state.group,
        name_of_class: this.state.name_of_class,
        is_teacher: false,
      },
    };
    Meteor.call('userInsert', user);
    browserHistory.push('/login');
  }

  handleInput(input, event) {
    const changedField = {};
    changedField[input] = event.target.value;
    this.setState(changedField);
  }

  render() {
    return (
      <div className="register-form">
        <h1>Cadastro</h1>
        <CustomError
          className="card-panel red lighten-3"
          error={this.state.error}
        />
        <form onSubmit={this.handleSubmit}>
          <CustomInput
            onChange={this.handleInput}
            value={this.state.name}
            type="text"
            className="input-field white-text"
            placeholder="Nome"
            autoComplete="off"
            required
            autoFocus
          />
          <CustomInput
            onChange={this.handleInput}
            value={this.state.group}
            list="groups"
            className="white-text"
            pattern="(Grupo [0-9]+)"
            title="Escolha uma das alternativas"
            required
            placeholder="Grupos"
          />
          <datalist id="groups">
            <option value="Grupo 01" />
            <option value="Grupo 02" />
            <option value="Grupo 03" />
            <option value="Grupo 04" />
            <option value="Grupo 05" />
          </datalist>
          <CustomInput
            onChange={this.handleInput}
            value={this.state.name_of_class}
            list="classes"
            className="white-text"
            placeholder="Disciplinas"
          />
          <datalist id="classes">
            <option value="Medição e Análise" />
            <option value="Requisitos" />
          </datalist>
          <CustomInput
            onChange={this.handleInput}
            value={this.state.registration_number}
            type="text"
            className="input-field white-text"
            placeholder="Matrícula"
            autoComplete="off"
            pattern="[0-9]{9}"
            title="Matricula da UnB - 9 digitos"
            required
          />
          <CustomInput
            onChange={this.handleInput}
            value={this.state.email}
            type="email"
            className="input-field white-text validate"
            placeholder="Email"
            autoComplete="off"
            required
          />
          <CustomInput
            onChange={this.handleInput}
            value={this.state.password}
            type="password"
            className="input-field white-text"
            placeholder="Senha"
            autoComplete="off"
            required
          />
          <CustomButton
            type="submit"
            className="waves-effect waves-light btn teal darken-4 button-center"
            icon="send"
            title="Registrar"
          />
        </form>
      </div>
    );
  }
}

export default Register;
