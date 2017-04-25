import React from 'react';
import NavBar from './navbar';
import './app.css';

function App() {
  return (
    <div>
      <NavBar />
      <div id="main" className="container">
        {this.props.children}
      </div>
    </div>
  );
}

export default App;
