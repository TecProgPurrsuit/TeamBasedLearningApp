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
}

App.propTypes = {
  children: React.PropTypes.object,
};

App.defaultProps = {
  children: undefined,
};

export default App;
