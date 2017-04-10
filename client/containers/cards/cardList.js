import React, { Component } from 'react';
import Card from './card';


class CardList extends Component {
  render() {
    return (
      <div className="row">
        <div className="col l9 offset-l1 s12">
          <ul>
            <Card />
          </ul>
        </div>
      </div>
    );
  }
}

export default CardList;
