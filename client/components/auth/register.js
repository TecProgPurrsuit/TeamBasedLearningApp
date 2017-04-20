import React, { Component } from 'react';
import { Link } from 'react-router';
import './authentication.css';

class Register extends Component {

  render() {
    return (
      <div className="register-form">
        <h1>Register</h1>
        <form>
          <input
            name="name"
            type="text"
            className="input-field white-text"
            placeholder="Nome"
            autoComplete="off"
            required
            autoFocus /><br />
          <input list="groups" name="group" className="white-text" placeholder="Grupos" />
            <datalist id="groups">
              <option value="Grupo 01" />
              <option value="Grupo 02" />
              <option value="Grupo 03" />
              <option value="Grupo 04" />
              <option value="Grupo 05" />
            </datalist>
          <input
            name="name_of_class"
            type="text"
            className="input-field white-text"
            placeholder="Nome da classe"
            autoComplete="off"
            required /><br />
          <input
            name="username"
            type="text"
            className="input-field white-text"
            placeholder="Usuário"
            autoComplete="off"
            required /><br />
          <input
            name="email"
            type="email"
            className="input-field white-text validate"
            placeholder="Email"
            autoComplete="off"
            required /><br />
          <input
            name="password"
            type="password"
            className="input-field white-text"
            placeholder="Password"
            autoComplete="off"
            required />
          <button type="submit" className="waves-effect waves-light btn teal darken-4"><i className="material-icons left">send</i>Registrar</button>
        </form>
      </div>
    );
  }
}

export default Register;
