/**
* This file is responsible for giving teacher some configuration options on a List Tail.
*
* @summary Teacher list options.
*
*/

import React from 'react';

function TeacherListTail() {
  return (
    <div className="card-action">
      <a className="activator">Ativar/Desativar lista</a>
    </div>
  );
}

TeacherListTail.propTypes = {
  list: React.PropTypes.object.isRequired,
};

export default TeacherListTail;
