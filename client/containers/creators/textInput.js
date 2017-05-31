import React, { Component } from 'react';
import PropTypes from 'prop-types';

require('./style/listCreatorStyle.css');

class TextInput extends Component {

  constructor(props) {
    super(props);

    this.state = { text_input: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.resetInput !== nextProps.resetInput) {
      this.setState({ text_input: '' });
    }
  }

  validate(value) {
    const id = this.props.id;
    const errorMessage = document.getElementById(id);
    if (value === '') {
      this.props.setValid(false);
      errorMessage.style.display = 'block';
    } else {
      this.props.setValid(true);
      errorMessage.style.display = 'none';
    }
  }

  handleChange(event) {
    this.setState({ text_input: event.target.value });
    this.props.setText(event.target.value);
    this.validate(event.target.value);
  }

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

TextInput.propTypes = {
  setValid: PropTypes.func.isRequired,
  setText: PropTypes.func.isRequired,
  inputLabel: PropTypes.string.isRequired,
  errorMessage: PropTypes.string.isRequired,
  resetInput: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired,
};

export default TextInput;
