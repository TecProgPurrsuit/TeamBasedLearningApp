import React, { Component } from 'react';

class CustomInput extends Component {

  render() {
    let input = null;

    if (this.props.icon) {
      input = (
        <div className="input-field">
          <i className="material-icons prefix">{this.props.icon}</i>
          <input {...this.props} />
        </div>
      );
    } else {
      input = <input {...this.props} />;
    }

    return (
      <div>
        {input}
      </div>
    );
  }
}

CustomInput.propTypes = {
  icon: React.PropTypes.string,
};

CustomInput.defaultProps = {
  icon: '',
};

export default CustomInput;
