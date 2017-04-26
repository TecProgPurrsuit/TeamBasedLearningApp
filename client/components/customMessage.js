/**
* This file is responsible for creating custom messages.
*
* @summary Create custom messages.
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

CustomMessage.propTypes = {
  message: React.PropTypes.string,
  className: React.PropTypes.string,
};

CustomMessage.defaultProps = {
  message: '',
  className: '',
};

export default CustomMessage;
