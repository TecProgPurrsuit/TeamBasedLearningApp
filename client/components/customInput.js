/**
* This file is responsible for creating custom inputs.
*
* @summary Create custom inputs.
*/

import React from 'react';

function CustomInput(props) {
  let input = null;

  // Insert input with icon if user pass it
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

CustomInput.propTypes = {
  icon: React.PropTypes.string,
};

CustomInput.defaultProps = {
  icon: '',
};

export default CustomInput;
