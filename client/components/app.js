import React, { Component } from 'react';
import NavBar from './navbar';
import './app.css';

class App extends Component {
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
};

export default App;
