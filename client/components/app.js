/**
* This file is the main of application.
*
* @summary Main file.
*/

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchLists } from '../actions/index';
import NavBar from './navbar';
import './app.css';

class App extends Component {
  componentWillMount() {
    this.props.fetchLists();
  }

  render() {
    return (
      <div>
        <NavBar />
        <div id="main" className="container">
          {this.props.children}
        </div>
      </div>
    );
  }
}

App.propTypes = {
  children: React.PropTypes.object,
  fetchLists: React.PropTypes.func.isRequired,
};

App.defaultProps = {
  children: null,
};

export default connect(null, { fetchLists })(App);
