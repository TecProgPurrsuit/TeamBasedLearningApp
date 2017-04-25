import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, browserHistory } from 'react-router';
import CustomInput from '../customInput';
import CustomButton from '../customButton';
import CustomError from '../customError';
import { connectUser } from '../../actions/index';
import './authentication.css';

class Login extends Component {

  componentWillMount() {
    this.state = { error: '', password: '', registration_number: '' };
  }


  handleSubmit(event) {
    event.preventDefault();

    const registrationNumber = this.state.registration_number;
    const password = this.state.password;

    Meteor.loginWithPassword(registrationNumber, password, (error) => {
      if (!error) {
        this.props.connectUser(Meteor.user());
        browserHistory.push('/');
      } else {
        this.setState({
          error: error.reason,
        });
      }
    });
  }


  handleInput(input, event) {
    const changedField = {};
    changedField[input] = event.target.value;
    this.setState(changedField);
  }


  render() {
    return (
      <div className="login">
        <h1>Login</h1>
        <CustomError
          className="card-panel red lighten-3"
          error={this.state.error}
        />
        <form className="input-login" id="login-form" onSubmit={this.handleSubmit}>
          <CustomInput
            onChange={this.handleInput}
            value={this.state.registration_number}
            icon="account_circle"
            type="text"
            placeholder="Matrícula"
            required
            autoComplete="off"
            autoFocus
          />
          <CustomInput
            onChange={this.handleInput}
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

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser,
  };
}

Login.propTypes = {
  connectUser: React.PropTypes.func.isRequired,
};


export default connect(mapStateToProps, { connectUser })(Login);
