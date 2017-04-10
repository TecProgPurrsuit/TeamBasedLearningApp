import React, { Component } from 'react';
import QuestionList from '../containers/questionList';
import NavBar from './navbar';

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
