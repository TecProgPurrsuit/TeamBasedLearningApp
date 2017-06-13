/**
* This file is responsible for creating links to all pages on navbar
*
* @summary Navbar.
*/

import React, { Component } from 'react';
import { connect } from 'react-redux';
import NotLoggedUser from './notLoggedUser';
import LoggedUser from './loggedUser';

class NavBar extends Component {

  constructor(props) {
    super(props);
    this.verifyIfUserIsLogged = this.verifyIfUserIsLogged.bind(this);
  }

  isAuthenticated() {
    /* global Meteor comes from Meteor library*/
    const userDataAvailable = (Meteor.user() !== null);
    const loggedIn = (this.props.currentUser && userDataAvailable);
    return loggedIn;
  }

  verifyIfUserIsLogged() {
    let componentMenu = null;
    if (this.isAuthenticated()) {
      const welcome = `Bem vindo ${this.props.currentUser.profile.name}`;
      componentMenu = <LoggedUser welcome={welcome} />;
    } else {
      componentMenu = <NotLoggedUser />;
    }
    return componentMenu;
  }

  render() {
    return (
      this.verifyIfUserIsLogged()
    );
  }
}

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser,
  };
}

NavBar.propTypes = {
  currentUser: React.PropTypes.object.isRequired,
};

export default connect(
  mapStateToProps,
)(NavBar);
