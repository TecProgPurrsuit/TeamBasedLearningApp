/**
* This file is responsible for creating links to all pages on navbar when the user is logged
*
* @summary Navbar when the user is logged.
* @class LoggedUser
*/

import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { selectGroupAnswering, selectIndividualAnswering } from '../../actions/index';
import Logout from '../auth/logout';

class LoggedUser extends Component {
  constructor(props) {
    super(props);
    // Finding the input and run the verifyIfUserIsAdmin function
    // ESLint requirement
    this.verifyIfUserIsAdmin = this.verifyIfUserIsAdmin.bind(this);
  }

  verifyIfUserIsAdmin() {
    let navBarItemMenu = <div />;
    if (this.props.adminStatus) {
      navBarItemMenu = <li><Link to="/create-list">Criar Lista</Link></li>;
    } else {
      // do nothing
    }
    return navBarItemMenu;
  }
  render() {
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
              <Logout />
            </ul>
            <ul className="side-nav" id="mobile-demo">
              <li><Link to="/group-simulator">Prova em grupo</Link></li>
              <li><Link to="/individual-simulator">Prova individual</Link></li>
              this.verifyIfUserIsAdmin();
            </ul>
          </div>
        </nav>
        <div className="left white-text">
          { this.props.welcome }
        </div>
      </div>
    );
  }
}

// Especify the attributes type
LoggedUser.propTypes = {
  adminStatus: React.PropTypes.bool.isRequired,
  welcome: React.PropTypes.object.isRequired,
  selectGroupAnswering: React.PropTypes.func.isRequired,
  selectIndividualAnswering: React.PropTypes.func.isRequired,
};

// Export the LoggedUser component
export default connect(
  null,
  { selectGroupAnswering, selectIndividualAnswering },
)(LoggedUser);
