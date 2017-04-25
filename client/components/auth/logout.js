import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';
import { connect } from 'react-redux';
import { connectUser } from '../../actions/index';

class Logout extends Component {

  constructor() {
    super();
    this.authenticationLogout = this.authenticationLogout.bind(this);
  }

  authenticationLogout() {
    Meteor.logout((error) => {
      if (!error) {
        this.props.connectUser(Meteor.user());
        browserHistory.push('/login');
      } else {
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
  connectUser: React.PropTypes.func,
};

Logout.defaultProps = {
  connectUser: null,
};

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser,
  };
}

export default connect(mapStateToProps, { connectUser })(Logout);
