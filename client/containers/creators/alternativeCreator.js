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
    this.state = { correctSwitchDisabler: false };
    // Finding the input and run the randleInputs and handleSubmit function
    // ESLint requirement
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  /* if the alternatives props change, verify if there is some correct alternative,
  if yes disable the correct switch */
  componentWillReceiveProps(nextProps) {
    if (this.props.alternatives !== nextProps.alternatives) {
      if (this.props.checkForAnyCorrectAlternative()) {
        this.setState({ correctSwitchDisabler: true });
      } else {
        this.setState({ correctSwitchDisabler: false });
      }
    }
  }

  handleSubmit(event) {
    event.preventDefault(); // Prevents the browser from reloading the page

    const alternativeDescription = this.alternativeDescription.value.trim();
    const CORRECT_ANSWER = 4;
    const WRONG_ANSWER = 0;

    let alternativePoints;
    if (this.correct.checked) {
      alternativePoints = CORRECT_ANSWER;
    } else {
      alternativePoints = WRONG_ANSWER;
    }

    const alternative = {
      alternativeDescription, alternativePoints,
    };

    this.props.setQuestionAlternative(alternative);
    this.alternativeDescription.value = '';
    this.setState({ correctSwitchDisabler: false });
    this.correct.checked = false;
    /* global $ */
    $('.collapsible').collapsible('close', 0);
  }

  // Render all the alternatives which being created on the question creating modal
  renderAlternatives() {
    const alternatives = this.props.alternatives;
    return alternatives.map((alternative, index) => {
      return (
        // Verify if the alternative.description is a secure props key
        <li key={alternative.description} className="collection-item">
          <div>
            Alternativa #{index + 1}
            <a href="#!" className="secondary-content"><i className="material-icons">delete</i></a>
            <a href="#!" className="secondary-content"><i className="material-icons">edit</i>&ensp;</a>
          </div>
        </li>
      );
    });
  }

  render() {
    return (
      <div>
        <ul id="addAlternative" className="collapsible collection">
          <li>
            <div className="collapsible-header"><i className="material-icons">add</i>Adicionar Alternativa</div>

            <div className="collapsible-body">

              <label htmlFor="alternativeDescription">Descrição</label>
              <input id="alternativeDescription" type="text" ref={(input) => { this.alternativeDescription = input; }} placeholder="Digite aqui" />
              <div>
                <div className="switch">
                  <label htmlFor="correctSwitch">
                    Incorreta
                    <input
                      id="correctSwitch"
                      disabled={this.state.correctSwitchDisabler}
                      type="checkbox"
                      ref={(input) => { this.correct = input; }}
                    />
                    <span className="lever" />
                    Correta
                  </label>
                  <br />
                  <label
                    id="correctSwitchDisabled"
                    htmlFor="correctSwitch"
                    hidden={!this.state.correctSwitchDisabler}
                  >
                      Já existe uma alternativa correta!
                  </label>
                </div>
                <div className="right-align">
                  <br />
                  <button onClick={this.handleSubmit} className="waves-effect waves-light btn">Adicionar</button>
                </div>
              </div>

            </div>
          </li>
        </ul>

        <ul id="alternativesList" className="collection">
          <li className="collection-header center">
            Alternativas
          </li>
          {this.renderAlternatives()}
        </ul>
      </div>
    );
  }
}

// Especify the attributes type
AlternativeCreator.propTypes = {
  setQuestionAlternative: PropTypes.func.isRequired,
  alternatives: PropTypes.array.isRequired,
  checkForAnyCorrectAlternative: PropTypes.func.isRequired,
};

// Export AlternativeCreator component
export default AlternativeCreator;
