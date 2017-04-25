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
    const userDataAvailable = (Meteor.user() !== null);
    const loggedIn = (this.props.currentUser && userDataAvailable);
    return loggedIn;
  }

  render() {
    let welcome = '';
    let authentication = null;

    // Verify that the user is logged in and return the Login or Logout button
    if (this.isAuthenticated()) {
      welcome = `Bem vindo ${this.props.currentUser.profile.name}`;
      authentication = <Logout />;
    } else {
      welcome = '';
      authentication = <li><Link to="/login">Login</Link></li>;
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
                  to="/group-simulator">
                  Prova em grupo
                </Link>
              </li>
              <li>
                <Link
                  onClick={this.props.selectIndividualAnswering}
                  to="/individual-simulator">
                  Prova individual
                </Link>
              </li>
              <li>
                <Link
                  onClick={this.props.selectIndividualAnswering}
                  to="/available-questions">
                  Listas disponíveis
                </Link>
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


function mapStateToProps(state) {
  return {
    currentUser: state.currentUser,
  };
}

NavBar.propTypes = {
  selectGroupAnswering: React.PropTypes.func.isRequired,
  selectIndividualAnswering: React.PropTypes.func.isRequired,
<<<<<<< HEAD
  currentUser: React.PropTypes.object,
};

NavBar.defaultProps = {
  currentUser: null,
};

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser,
  };
}

=======
  currentUser: React.PropTypes.object.isRequired,
};

>>>>>>> a67fdbf92b760c5e95b0a7c8ef3893e24067d55c
export default connect(
  mapStateToProps,
  { selectGroupAnswering, selectIndividualAnswering },
)(NavBar);
