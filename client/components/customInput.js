import React, { Component } from 'react';

class CustomInput extends Component {

  render() {
    if(this.props.icon) {
      input = (
        <div className="input-field">
          <i className="material-icons prefix">{this.props.icon}</i>
          <input {...this.props} />
        </div>
      );
    } else {
      input = <input {...this.props} />
    }
    return(
      <div>
        {input}
      </div>
    );
  }
}

export default CustomInput;
