/**
* This file is responsible for rendering the create alternatives component.
*
* @summary Component for creating alternatives.
*
* @class AlternativeCreator
*/

import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AlternativeCreator extends Component {

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();

    const alternativeDescription = this.alternativeDescription.value.trim();

    let alternativePoints;
    if (this.correct.checked) {
      alternativePoints = 4;
    } else {
      alternativePoints = 0;
    }

    const alternative = {
      alternativeDescription, alternativePoints,
    };

    this.props.setQuestionAlternative(alternative);
    this.alternativeDescription.value = '';
    this.correct.checked = false;
    /* global $, jQuery*/
    $('.collapsible').collapsible('close', 0);
  }

  render() {
    return (
      <div>
        <ul id="addAlternative" className="collapsible collection">
          <li>
            <div className="collapsible-header"><i className="material-icons">add</i>Adicionar Alternativa</div>

            <div className="collapsible-body">

              <form id="alternativeForm" onSubmit={this.handleSubmit}>
                <label htmlFor="alternativeDescription">Descrição</label>
                <input id="alternativeDescription" type="text" ref={(input) => { this.alternativeDescription = input; }} placeholder="Digite aqui" />
                <div>
                  <div className="switch">
                    <label htmlFor="correct">
                      Incorreta
                      <input
                        id="correct"
                        type="checkbox"
                        ref={(input) => { this.correct = input; }}
                      />
                      <span className="lever" />
                      Correta
                    </label>
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

AlternativeCreator.propTypes = {
  setQuestionAlternative: PropTypes.func.isRequired,
};

export default AlternativeCreator;
