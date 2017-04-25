/**
* This file is the main of application.
*
* @summary Main file.
*/

import React from 'react';
import NavBar from './navbar';
import './app.css';

function App(props) {
  return (
    <div>
      <NavBar />
      <div id="main" className="container">
        {props.children}
      </div>
    </div>
  );
}

App.propTypes = {
  children: React.PropTypes.object,
};

App.defaultProps = {
  children: null,
};

export default App;
