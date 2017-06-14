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

// Especify the list type and if it is requered on system
TeacherListTail.propTypes = {
  list: React.PropTypes.object.isRequired,
};

// Export the TeacherListTail by default
export default TeacherListTail;
