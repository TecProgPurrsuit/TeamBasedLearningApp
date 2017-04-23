/**
* This file is where the card list for indidual answers is rendered.
*
* @summary Individual list card container.
*
* @link /individual-simulator
* @class CardListIndividual
*/

import React, { Component } from 'react';
import CardIndividual from './cardIndividual';


class CardListIndividual extends Component {
  render() {
    return (
      <div className="row">
        <div className="col l3" />
        <div className="col l6 s12">
          <ul>
            <CardIndividual />
          </ul>
        </div>
        <div className="col l3" />
      </div>
    );
  }
}

export default CardListIndividual;
