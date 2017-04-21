import React, { Component } from 'react';
import cookie from 'react-cookie';
import { Link } from 'react-router'

class Logout extends Component {

  logout() {
    Meteor.logout((error) => {
      if(!error) {
        cookie.remove('user', {path: '/'})
        // window.location.reload();
      } else {
        console.log(error.reason);
      }
    });
  }

  render() {
    return(
      <li onClick={this.logout.bind(this)}>
        <Link to="/login">Logout</Link>
      </li>
    );
  }

}

export default Logout;
