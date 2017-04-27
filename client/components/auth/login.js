/**
* This file is responsible for logging the user into the system
*
* @summary Logging the user into the system.
*/

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, browserHistory } from 'react-router';
import CustomInput from '../customInput';
import CustomButton from '../customButton';
import CustomMessage from '../customMessage';
import { connectUser } from '../../actions/index';
import './authentication.css';

class Login extends Component {

  componentWillMount() {
    this.state = {
      message: '',
      error: false,
      password: '',
      registration_number: '',
    };
    // Finding the input and run the randleInput and handleSubmit function
    // ESLint requirement
    this.handleInputUser = this.handleInput.bind(this, 'registration_number');
    this.handleInputPassword = this.handleInput.bind(this, 'password');
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleSubmit(event) {
    event.preventDefault(); // Prevents the browser from reloading the page

    const registrationNumber = this.state.registration_number;
    const password = this.state.password;

    // Log the user into the system
    Meteor.loginWithPassword(registrationNumber, password, (error) => {
      if (!error) {
        this.props.connectUser(Meteor.user());
        console.warn(Meteor.user());
        this.setState({ message: 'Successfully logged in!' });
        browserHistory.push('/');
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
    if (event.target.value !== '') {
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
      <div className="login">
        <h1>Login</h1>

        <CustomMessage
          className={messageClass}
          message={this.state.message}
        />

        <form className="input-login" id="login-form" onSubmit={this.handleSubmit}>

          <CustomInput
            onChange={this.handleInputUser}
            value={this.state.registration_number}
            icon="account_circle"
            type="text"
            placeholder="Matrícula"
            required
            autoComplete="off"
            autoFocus
          />

          <CustomInput
            onChange={this.handleInputPassword}
            value={this.state.password}
            icon="lock"
            type="password"
            placeholder="Senha"
            required
            autoComplete="off"
          />

          <CustomButton
            icon="send"
            className="waves-effect waves-light btn teal darken-4 button-center"
            title="Login"
            type="submit"
          />

          <Link to="/register" className="register">Não possui uma conta? Cadastre-se</Link>

        </form>
      </div>
    );
  }
}

Login.propTypes = {
  connectUser: React.PropTypes.func,
};

Login.defaultProps = {
  connectUser: null,
};

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser,
  };
}

export default connect(mapStateToProps, { connectUser })(Login);
