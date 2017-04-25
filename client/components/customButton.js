import React from 'react';

function CustomButton(props) {
  return (
    <button type={props.type} className={props.className}>
      <i className="material-icons left">{props.icon}</i>
      {props.title}
    </button>
  );
}

export default CustomButton;
