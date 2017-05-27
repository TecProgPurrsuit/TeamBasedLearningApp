/**
* This file is responsible for creating links to all pages on navbar
*
* @summary Navbar.
*/

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { selectGroupAnswering, selectIndividualAnswering } from '../actions/index';
import Logout from './auth/logout';

class NavBar extends Component {

  isAuthenticated() {
    /* global Meteor comes from Meteor library*/
    const userDataAvailable = (Meteor.user() !== null);
    const loggedIn = (this.props.currentUser && userDataAvailable);
    return loggedIn;
  }

  render() {
    let welcome = '';
    let authentication = null;
    let updateProfileButton = null;

    // Verify that the user is logged in and return the Login or Logout button
    if (this.isAuthenticated()) {
      welcome = `Bem vindo ${this.props.currentUser.profile.name}`;
      authentication = <Logout />;
      updateProfileButton =
        <li><Link to="/update-profile">Atualizar Perfil</Link></li>;
    } else {
      welcome = '';
      authentication = <li><Link to="/login">Login</Link></li>;
      updateProfileButton = null;
    }

    return (
      <div>
        <nav className="teal darken-4">
          <div className="nav-wrapper">
            <Link to="/" className="left brand-logo home-brand">
              <i className="material-icons">home</i>
              Team Based Learn
            </Link>
            <a data-activates="mobile-demo" className="button-collapse">
              <i className="material-icons">menu</i>
            </a>
            <ul className="right hide-on-med-and-down">
              <li>
                <Link
                  onClick={this.props.selectGroupAnswering}
                  to="/group-simulator"
                >
                  Prova em grupo
                </Link>
              </li>
              <li>
                <Link
                  onClick={this.props.selectIndividualAnswering}
                  to="/individual-simulator"
                >
                  Prova individual
                </Link>
              </li>
              <li>
                <Link
                  onClick={this.props.selectIndividualAnswering}
                  to="/available-questions"
                >
                  Listas disponíveis
                </Link>
              </li>
              { authentication }
              { updateProfileButton }
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


function mapStateToProps(state) {
  return {
    currentUser: state.currentUser,
  };
}

NavBar.propTypes = {
  selectGroupAnswering: React.PropTypes.func.isRequired,
  selectIndividualAnswering: React.PropTypes.func.isRequired,
  currentUser: React.PropTypes.object,
};

NavBar.defaultProps = {
  currentUser: null,
};

export default connect(
  mapStateToProps,
  { selectGroupAnswering, selectIndividualAnswering },
)(NavBar);
