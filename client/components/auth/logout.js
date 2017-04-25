import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';

class Logout extends Component {

  logout() {
    Meteor.logout((error) => {
      if (!error) {
        browserHistory.push('/');
      } else {
        console.error(error.reason);
      }
    });
  }

  render() {
    return (
      <li>
        <Link onClick={this.logout} to="/login">Logout</Link>
      </li>
    );
  }

}

export default Logout;
