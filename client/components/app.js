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

export default App;
