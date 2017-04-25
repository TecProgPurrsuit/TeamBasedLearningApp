import React, { Component } from 'react';

class CustomError extends Component {

  render() {
    const error = this.props.error;
    let divError = '';

    if (error.length > 0) {
      divError = <div className={this.props.className}>{error}</div>;
    } else {
      // Do Nothing
    }

    return (<div>{divError}</div>);
  }
}

CustomError.propTypes = {
  error: React.PropTypes.string,
  className: React.PropTypes.string,
};

CustomError.defaultProps = {
  className: '',
  error: '',
};

export default CustomError;
