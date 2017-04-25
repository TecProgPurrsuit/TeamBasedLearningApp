import React, { Component, PropTypes } from 'react';
import { browserHistory } from 'react-router'

class AuthContainer extends Component {
  constructor(props) {
    super(props)
    this.state = this.getMeteorData();
    this.logout = this.logout.bind(this)
  }

  getMeteorData() {
    return { isAuthenticated: Meteor.userId() !== null }
  }

  componentWillMount() {
    if(!this.state.isAuthenticated) {
      browserHistory.push('/login');
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if(!this.state.isAuthenticated) {
      browserHistory.push('/login');
    }
  }

  logout(event) {
    event.preventDefault();
    Meteor.logout( (err) => {
      if(err) {
        console.error(err.reason);
      } else {
        browserHistory.push('/login');
      }
    });
  }

}

export default AuthContainer;
