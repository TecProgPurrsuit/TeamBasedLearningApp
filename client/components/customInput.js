import React from 'react';

function CustomInput(props) {
  let input = null;

  if (props.icon) {
    input = (
      <div className="input-field">
        <i className="material-icons prefix">{props.icon}</i>
        <input {...props} />
      </div>
    );
  } else {
    input = <input {...props} />;
  }

  return (
    <div>
      {input}
    </div>
  );
}

export default CustomInput;
