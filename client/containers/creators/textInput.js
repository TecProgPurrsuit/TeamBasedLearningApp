/**
* This file is responsible for rendering the text input component of the creating lists form.
*
* @summary Component for creating text inputs.
*
* @class TextInput
*/

import React, { Component } from 'react';
import PropTypes from 'prop-types';

require('./style/listCreatorStyle.css');

class TextInput extends Component {

  constructor(props) {
    super(props);
    this.state = { text_input: '' };
    // Finding the input and run the randleInputs function
    // ESLint requirement
    this.handleChange = this.handleChange.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }

  // if the resetInput props changes, reset the input field
  // if the validate props changes to true, validate the input field
  componentWillReceiveProps(nextProps) {
    if (this.props.resetInput !== nextProps.resetInput) {
      this.setState({ text_input: '' });
    } else if (this.props.validate !== nextProps.validate && nextProps.validate === true) {
      this.validate(this.state.text_input);
    } else {
      // Do nothing
    }
  }

  // validate the input field and show a error message if necessary
  validate(value) {
    const id = this.props.id;
    const errorMessage = document.getElementById(id);
    value.trim();

    // show the props error message when the field is empty and hide it when it's not
    if (value === '') {
      this.props.setText(' ');
      errorMessage.style.display = 'block';
    } else {
      this.props.setText(value);
      errorMessage.style.display = 'none';
    }
  }

  // validate the input field while changes are made
  handleChange(event) {
    this.setState({ text_input: event.target.value });
    this.validate(event.target.value);
  }

  // validate the input when it loses its focus
  handleBlur(event) {
    this.validate(event.target.value);
  }

  render() {
    return (
      <div className="input-field">
        <label htmlFor="inputLabel">{this.props.inputLabel}</label>
        <input
          id="inputLabel"
          type="text"
          value={this.state.text_input}
          className="inputForm"
          onChange={this.handleChange}
          onBlur={this.handleBlur}
        />
        <p id={this.props.id} className="errorMessage">{this.props.errorMessage}</p>
      </div>
    );
  }
}

// Especify the connectUser type
TextInput.propTypes = {
  setText: PropTypes.func.isRequired,
  inputLabel: PropTypes.string.isRequired,
  errorMessage: PropTypes.string.isRequired,
  resetInput: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired,
  validate: PropTypes.bool.isRequired,
};

// Export TextInput component
export default TextInput;
