import React, { Component } from 'react';

class CustomError extends Component {

  render() {
    let error = this.props.error;
    let divError = ''
    if(error.length > 0) {
      divError = <div className={this.props.className}>{error}</div>
    } else {
      // Do Nothing
    }
    return(<div>{divError}</div>);
  }
}

export default CustomError;