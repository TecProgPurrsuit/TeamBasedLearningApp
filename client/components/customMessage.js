/**
* This file is responsible for creating custom messages.
*
* @summary Create custom messages.
* @class CustomMessage
*/

import React from 'react';

function CustomMessage(props) {
  const message = props.message;
  let divMessage = '';

  // Check for any errors
  if (message.length > 0) {
    divMessage = <div className={props.className}>{message}</div>;
  } else {
    // Do Nothing
  }

  return (<div>{divMessage}</div>);
}

// Especify the attributes type
CustomMessage.propTypes = {
  message: React.PropTypes.string,
  className: React.PropTypes.string,
};

// Apply the default value on attributes
CustomMessage.defaultProps = {
  message: '',
  className: '',
};

// Export the CustomMessage component
export default CustomMessage;
