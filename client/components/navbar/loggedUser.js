import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { selectGroupAnswering, selectIndividualAnswering } from '../../actions/index';
import Logout from '../auth/logout';


class LoggedUser extends Component {
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

LoggedUser.propTypes = {
  welcome: React.PropTypes.object.isRequired,
  selectGroupAnswering: React.PropTypes.func.isRequired,
  selectIndividualAnswering: React.PropTypes.func.isRequired,
};
export default connect(
  null,
  { selectGroupAnswering, selectIndividualAnswering },
)(LoggedUser);
