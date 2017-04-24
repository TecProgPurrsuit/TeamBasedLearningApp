import React, { Component } from 'react';

class IndividualAlternativeValue extends Component {
  render() {
    return (
      <select className="browser-default" >
        <option value="" disabled selected>Escolha a pontuação</option>
        <option value="0">0</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="3">4</option>
      </select>
    );
  }
}

export default IndividualAlternativeValue;
