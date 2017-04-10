import React, { Component } from 'react';
import { Link } from 'react-router';
import AccountsUI from './accountsUI.js';

class NavBar extends Component {

  render() {
    return (
      <nav className="teal darken-4">
        <div className="nav-wrapper">
          <Link to="/" className="center brand-logo home-brand">
            <i className="material-icons">home</i>
            Team Based Learn
          </Link>
          <a href="#" data-activates="mobile-demo" className="button-collapse"><i className="material-icons">menu</i></a>
          <ul className="left hide-on-med-and-down">
            <li><AccountsUI /></li>
            <li><Link to="/group-simulator">Prova em grupo</Link></li>
            <li><Link to="/individual-simulator">Prova individual</Link></li>
          </ul>
          <ul className="side-nav" id="mobile-demo">
            <li><AccountsUI /></li>
            <li><Link to="/group-simulator">Prova em grupo</Link></li>
            <li><Link to="/individual-simulator">Prova individual</Link></li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavBar;
