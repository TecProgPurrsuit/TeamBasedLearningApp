import React, { Component, PropTypes } from 'react';
import { Link, browserHistory } from 'react-router';
import cookie from 'react-cookie';
import './authentication.css';

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {error: ''};
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    let registration_number = document.getElementById('login-username').value;
    let password = document.getElementById('login-password').value;
    Meteor.loginWithPassword(registration_number, password, (err) => {
      if(err) {
        this.setState({
          error: err.reason
        });
      } else {
        browserHistory.push('/');
        cookie.save('user', Meteor.user(), {path: '/'})
      }
    });
  }

  render() {
    const error = this.state.error;
    return (
      <div className="login">
        <h1>Login</h1>
        <div className="error">
          { error.length > 0 ?
              <div className="card-panel red lighten-3">{error}</div>
            : ''
          }
        </div>
        <form className="input-login" id="login-form" onSubmit={this.handleSubmit}>
          <div className="input-field">
            <i className="material-icons prefix">account_circle</i>
            <input
              className="input-login validate"
              id="login-username"
              name="username"
              type="text"
              placeholder="Matrícula"
              required
              autoComplete="off"
              autoFocus /><br />
          </div>
          <div className="input-field">
            <i className="material-icons prefix">lock</i>
            <input
              className="input-login validate"
              id="login-password"
              name="password"
              type="password"
              placeholder="Senha"
              autoComplete="off"
              required /><br />
          </div>
          <button type="submit" className="waves-effect waves-light btn teal darken-4 button-center">
            <i className="material-icons left">send</i>
            Login
          </button><br />
          <Link to="/register" className="register">Não possui uma conta? Cadastre-se</Link>
        </form>
      </div>
    );
  }
}

export default Login;
