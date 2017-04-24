import React, { Component } from 'react';

class CustomButton extends Component {

  render() {
    return(
      <button type={this.props.type} className={this.props.className}>
        <i className="material-icons left">{this.props.icon}</i>
        {this.props.title}
      </button>
    );
  }
}

export default CustomButton;
