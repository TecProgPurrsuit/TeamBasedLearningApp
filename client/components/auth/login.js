import React, { Component } from 'react';
import { Link } from 'react-router';
import './authentication.css';

class Login extends Component {

  render() {
    return (
      <div className="login">
        <h1>Login</h1>
        <form className="input-login">
          <div className="input-field">
            <i className="material-icons prefix">account_circle</i>
            <input
              className="input-login validate"
              name="username"
              type="text"
              placeholder="Username"
              required
              autoComplete="off"
              autoFocus /><br />
          </div>
          <div className="input-field">
            <i className="material-icons prefix">lock</i>
            <input
              className="input-login validate"
              name="password"
              type="password"
              placeholder="Password"
              autoComplete="off"
              required /><br />
          </div>
          <button type="submit" className="waves-effect waves-light btn teal darken-4"><i className="material-icons left">send</i>Login</button><br />
          <Link to="/register" className="register">Não possui uma conta? Cadastre-se</Link>
        </form>
      </div>
    );
  }
}

export default Login;
