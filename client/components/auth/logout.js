/**
* This file is responsible for loggout the user into the system
*
* @summary Loggout the user into the system.
*/

import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';
import { connect } from 'react-redux';
import { eraseUser } from '../../actions/index';

class Logout extends Component {
/* global Meteor comes from Meteor Library */
  constructor() {
    super();
    this.state = { message: '', error: false };
    this.authenticationLogout = this.authenticationLogout.bind(this);
  }

  authenticationLogout() {
    /* global Meteor comes from Meteor library*/
    Meteor.logout((error) => {
      if (!error) {
        this.props.eraseUser(Meteor.user());
        console.warn(Meteor.user());
        this.setState({ message: 'Successfully logged out!' });
        browserHistory.push('/login');
      } else {
        this.setState({
          message: error.reason,
          error: true,
        });
        console.error(error.reason);
      }
    });
  }

  render() {
    return (
      <li>
        <Link onClick={this.authenticationLogout} to="/login">Logout</Link>
      </li>
    );
  }

}

Logout.propTypes = {
  eraseUser: React.PropTypes.func.isRequired,
};

Logout.defaultProps = {
  connectUser: null,
};

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser,
  };
}

export default connect(mapStateToProps, { eraseUser })(Logout);
