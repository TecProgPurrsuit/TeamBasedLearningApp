import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router'
import cookie from 'react-cookie';

class Logout extends Component {

  constructor(props) {
    super(props)
    this.logout = this.logout.bind(this)
  }

  logout(event) {
    event.preventDefault()
    Meteor.logout( (err) => {
      if(err) {
        console.log(err.reason);
      } else {
        cookie.remove('user', {path: '/'})
        window.location.reload();
      }
    });
  }

  render() {
    return(
      <li onClick={this.logout}>
        <Link to="/login">Logout</Link>
      </li>
    );
  }

}

export default Logout;
