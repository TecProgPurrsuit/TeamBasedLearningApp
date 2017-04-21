/**
* This file is responsible for rendering the create alternatives component.
*
* @summary Component for creating alternatives.
*
* @class AlternativeCreator
*/

import React, { Component } from 'react';

class AlternativeCreator extends Component {
  render() {
    return (
      <div>

        <ul id="addAlternative" className="collapsible collection">
          <li>
            <div className="collapsible-header"><i className="material-icons">add</i>Adicionar Alternativa</div>

            <div className="collapsible-body">

              <form id="alternativeForm">
                <label htmlFor="alternativeTextArea">Descrição</label>
                <input id="alternativeTextArea" type="text" placeholder="Digite aqui" />
                <div className="switch">
                  <label htmlFor="alternativeCheckbox">
                    Errada
                    <input id="alternativeCheckbox" type="checkbox" />
                    <span className="lever" />
                    Certa
                  </label>
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
