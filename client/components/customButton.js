/**
* This file is responsible for creating custom buttons.
*
* @summary Create custom buttons.
* @class CustomButton
*/

import React from 'react';

function CustomButton(props) {
  return (
    <button type={props.type} className={props.className}>
      <i className="material-icons left">{props.icon}</i>
      {props.title}
    </button>
  );
}

// Especify the attributes type
CustomButton.propTypes = {
  type: React.PropTypes.string.isRequired,
  className: React.PropTypes.string,
  icon: React.PropTypes.string,
  title: React.PropTypes.string.isRequired,
};

// Apply the default value on attributes
CustomButton.defaultProps = {
  className: '',
  icon: '',
};

// Export CustomButton by defaut
export default CustomButton;
