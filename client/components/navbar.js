import React, { Component } from 'react';
import cookie from 'react-cookie';
import connect from 'react-redux';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { selectGroupAnswering, selectIndividualAnswering } from '../actions/index';
import Logout from './auth/logout';

class NavBar extends Component {

  componentWillMount() {
    this.props.currentUser;
    console.log(this.currentUser)
  }

  isAuthenticated() {
    let userDataAvailable = (this.currentUser !== undefined)
    let loggedIn = (this.currentUser && userDataAvailable)
    return loggedIn
  }

  render() {
    if(this.isAuthenticated()) {
      welcome = 'Bem vindo ' + this.currentUser.profile.name;
      authentication = <Logout />
    } else {
      welcome = '';
      authentication = <li><Link to="/login">Login</Link></li>
    }
    return (
      <div>
      <nav className="teal darken-4">
        <div className="nav-wrapper">
          <Link to="/" className="left brand-logo home-brand">
            <i className="material-icons">home</i>
            Team Based Learn
          </Link>
          <a href="#" data-activates="mobile-demo" className="button-collapse">
            <i className="material-icons">menu</i>
          </a>
          <ul className="right hide-on-med-and-down">
            <li onClick={this.props.selectGroupAnswering}>
              <Link to="/group-simulator">Prova em grupo</Link>
            </li>
            <li onClick={this.props.selectIndividualAnswering}>
              <Link to="/individual-simulator">Prova individual</Link>
            </li>
            <li onClick={this.props.selectIndividualAnswering}>
              <Link to="/available-questions">Listas disponíveis</Link>
            </li>
            { authentication }
          </ul>
          <ul className="side-nav" id="mobile-demo">
            <li><Link to="/group-simulator">Prova em grupo</Link></li>
            <li><Link to="/individual-simulator">Prova individual</Link></li>
          </ul>
        </div>
      </nav>
      <div className="left white-text">
        { welcome }
      </div>
      </div>
    );
  }
}

NavBar.propTypes = {
  selectGroupAnswering: React.PropTypes.func.isRequired,
  selectIndividualAnswering: React.PropTypes.func.isRequired,
};

mapStateToProps(state) {
  return {
    currentUser: state.currentUser,
  };
}

export default connect(mapStateToProps, { selectGroupAnswering, selectIndividualAnswering })(NavBar);
