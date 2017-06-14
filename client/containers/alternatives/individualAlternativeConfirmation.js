/**
* This file is responsible for render a individual alternative value.
*
* @summary Component for a individual alternative value.

  @function IndividualAlternativeValue
*/

import React from 'react';

function IndividualAlternativeValue() {
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

// Export IndividualAlternativeValue function
export default IndividualAlternativeValue;
