import React from 'react';

function CustomError(props) {
  const error = props.error;
  let divError = '';

  if (error.length > 0) {
    divError = <div className={props.className}>{error}</div>;
  } else {
    // Do Nothing
  }
  return (<div>{divError}</div>);
}

export default CustomError;
