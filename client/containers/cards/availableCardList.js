import React, { Component } from 'react';
import AvailableCard from './availableCard';


class AvailableCardList extends Component {
  render() {
    return (
      <div className="row">
        <div className="col l3" />
        <div className="col l6 s12">
          <ul>
            <AvailableCard />
          </ul>
        </div>
        <div className="col l3" />
      </div>
    );
  }
}

export default AvailableCardList;
