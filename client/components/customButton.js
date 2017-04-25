import React, { Component } from 'react';

class CustomButton extends Component {

  render() {
    return (
      <button type={this.props.type} className={this.props.className}>
        <i className="material-icons left">{this.props.icon}</i>
        {this.props.title}
      </button>
    );
  }
}

CustomButton.propTypes = {
  type: React.PropTypes.string.isRequired,
  className: React.PropTypes.string,
  icon: React.PropTypes.string.isRequired,
  title: React.PropTypes.string.isRequired,
};

CustomButton.defaultProps = {
  className: '',
};

export default CustomButton;
