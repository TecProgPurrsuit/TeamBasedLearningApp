import React, { Component } from 'react';

class TeacherListTail extends Component {
  render() {
    return (
      <div className="card-action">
        <a className="activator">Ativar/Desativar lista</a>
      </div>
    );
  }
}

TeacherListTail.propTypes = {
  list: React.PropTypes.object.isRequired,
};

export default TeacherListTail;
