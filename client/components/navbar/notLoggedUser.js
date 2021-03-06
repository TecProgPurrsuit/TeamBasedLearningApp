/**
* This file is responsible for creating links to all pages on navbar when user is not logged
*
* @summary Navbar when user is not logged.
* @function notLoggedUser
*/

import React from 'react';
import { Link } from 'react-router';

const notLoggedUser = () => {
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
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><Link to="/login">Login</Link></li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

// Export notLoggedUser component
export default notLoggedUser;
