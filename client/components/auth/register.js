import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import CustomInput from '../customInput';
import CustomButton from '../customButton';
import CustomMessage from '../customMessage';
import './authentication.css';

class Register extends Component {
/* global Meteor comes from Meteor Library */
  constructor() {
    super();
    this.state = {
      message: '',
      error: false,
      registration_number: '',
      password: '',
      email: '',
      name: '',
      group: '',
      name_of_class: '',
      classes: [],
      groups: [],
    };
    // Finding the input and run the randleInput and handleSubmit function
    // ESLint requirement
    this.handleInputName = this.handleInput.bind(this, 'name');
    this.handleInputGroup = this.handleInput.bind(this, 'group');
    this.handleInputClass = this.handleInput.bind(this, 'name_of_class');
    this.handleInputRegistration = this.handleInput.bind(this, 'registration_number');
    this.handleInputEmail = this.handleInput.bind(this, 'email');
    this.handleInputPassword = this.handleInput.bind(this, 'password');
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault(); // Prevents the browser from reloading the page

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

    // Function to create a user
    Meteor.call('userInsert', user, (error) => {
      if (!error) {
        this.setState({ message: 'Successfully created!' });
        browserHistory.push('/login');
      } else {
        this.setState({
          message: error.reason,
          error: true,
        });
        console.error(error.reason);
      }
    });
  }

  handleInput(input, event) {
    const changedField = {};
    changedField[input] = event.target.value;

    // Checks if the passed value is blank
    if (event.target.value !== ' ') {
      this.setState(changedField);
    } else {
      console.error("Can't insert blank value");
    }
  }

  render() {
    let messageClass = '';
    if (this.state.error) {
      messageClass = 'card-panel red lighten-3';
    } else {
      messageClass = 'card-panel teal lighten-2';
    }

    return (
      <div className="register-form">
        <h1>Cadastro</h1>

        <CustomMessage
          className={messageClass}
          message={this.state.message}
        />

        <form onSubmit={this.handleSubmit}>

          <CustomInput
            onChange={this.handleInputName}
            value={this.state.name}
            type="text"
            className="input-field white-text"
            placeholder="Nome"
            autoComplete="off"
            required
            autoFocus
          />

          <CustomInput
            onChange={this.handleInputGroup}
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
            onChange={this.handleInputClass}
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
            onChange={this.handleInputRegistration}
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
            onChange={this.handleInputEmail}
            value={this.state.email}
            type="email"
            className="input-field white-text validate"
            placeholder="Email"
            autoComplete="off"
            required
          />

          <CustomInput
            onChange={this.handleInputPassword}
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
