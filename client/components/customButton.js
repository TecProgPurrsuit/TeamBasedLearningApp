/**
* This file is responsible for creating custom buttons.
*
* @summary Create custom buttons.
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

CustomButton.propTypes = {
  type: React.PropTypes.string.isRequired,
  className: React.PropTypes.string,
  icon: React.PropTypes.string,
  title: React.PropTypes.string.isRequired,
};

CustomButton.defaultProps = {
  className: '',
  icon: '',
};

export default CustomButton;
