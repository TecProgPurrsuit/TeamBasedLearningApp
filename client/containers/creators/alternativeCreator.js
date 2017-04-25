/**
* This file is responsible for rendering the create alternatives component.
*
* @summary Component for creating alternatives.
*
* @class AlternativeCreator
*/

import React, { Component } from 'react';

class AlternativeCreator extends Component {

  handleSubmit(event) {
    event.preventDefault();
    const alternativeDescription = this.alternativeDescription.value.trim();
    console.log(alternativeDescription);

    const alternativePoints = this.alternativePoints.value;
    console.log(alternativePoints);

    let alternative = true;
    if (alternativePoints) {
      alternative = true;
    } else {
      alternative = false;
    }

    const alternativeObject = {
      alternativeDescription, alternativePoints, alternative,
    };
    console.log(alternativeObject);
    this.props.setQuestionAlternative(alternativeObject);
    this.alternativeDescription.value = '';
    $('.collapsible').collapsible('close', 0);
  }

  render() {
    return (
      <div>
        <ul id="addAlternative" className="collapsible collection">
          <li>
            <div className="collapsible-header"><i className="material-icons">add</i>Adicionar Alternativa</div>

            <div className="collapsible-body">

              <form id="alternativeForm" onSubmit={this.handleSubmit.bind(this)}>
                <label htmlFor="alternativeDescription">Descrição</label>
                <input id="alternativeDescription" type="text" ref={(input) => this.alternativeDescription = input} placeholder="Digite aqui" />
                <div>
                  <div className="left-align">
                  <label htmlFor="alternativePoints">Pontos:</label>
                  <input id="alternativePoints" type="number" ref={(input) => this.alternativePoints = input} min="0" max="4" />
                  </div>
                  <div className="right-align">
                    <br />
                    <button type="submit" className="waves-effect waves-light btn">Adicionar</button>
                  </div>
                </div>
              </form>

            </div>
          </li>
        </ul>

        <ul id="alternativesList" className="collection">
          <li className="collection-header center">
            Alternativas
          </li>
          <li className="collection-item">
            a.
            <a href="#!" className="secondary-content"><i className="material-icons">delete</i></a>
            <a href="#!" className="secondary-content"><i className="material-icons">edit</i>&ensp;</a>
          </li>
          <li className="collection-item">
            b.
            <a href="#!" className="secondary-content"><i className="material-icons">delete</i></a>
            <a href="#!" className="secondary-content"><i className="material-icons">edit</i>&ensp;</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default AlternativeCreator;
