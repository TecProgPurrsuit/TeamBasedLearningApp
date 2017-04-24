import React, { Component } from 'react';
import connect from 'react-redux';
import cookie from 'react-cookie';
import { Link, browserHistory } from 'react-router';
import CustomInput from '../customInput';
import CustomButton from '../customButton';
import CustomError from '../customError';
import connectUser from '../actions/index';
import './authentication.css';

class Login extends Component {

  componentWillMount() {
    this.state = {error: '', isLoggedIn: false, user: null, password: '', registration_number: ''};
  }


  handleSubmit(event) {
    event.preventDefault();
    let registration_number = this.state.registration_number
    let password = this.state.password;
    Meteor.loginWithPassword(registration_number, password, (error) => {
      if(!error) {
        this.props.connectUser(Meteor.user());
        cookie.save('user', Meteor.user(), {path: '/'})
        browserHistory.push('/');
      } else {
        this.setState({
          error: error.reason,
        });
      }
    });
  }

  handleInput(input, event) {
    let changedField = {};
    changedField[input] = event.target.value
    this.setState(changedField);
  }

  render() {
    return (
      <div className="login">
        <h1>Login</h1>
        <CustomError
          className="card-panel red lighten-3"
          error={this.state.error} />
        <form className="input-login" id="login-form" onSubmit={this.handleSubmit.bind(this)}>
          <CustomInput
            onChange={this.handleInput.bind(this, 'registration_number')}
            value={this.state.registration_number}
            icon="account_circle"
            type="text"
            placeholder="Matrícula"
            required
            autoComplete="off"
            autoFocus />
          <CustomInput
            onChange={this.handleInput.bind(this, 'password')}
            value={this.state.password}
            icon="lock"
            type="password"
            placeholder="Senha"
            required
            autoComplete="off" />
          <CustomButton
            icon="send"
            className="waves-effect waves-light btn teal darken-4 button-center"
            title="Login"
            type="submit" />
          <Link to="/register" className="register">Não possui uma conta? Cadastre-se</Link>
        </form>
      </div>
    );
  }
}

mapStateToProps(state) {
  return {
    currentUser: state.currentUser;
  }
}

export default connect(mapStateToProps, {connectUser})(Login);
