/**
* This file is responsible for render the organized table of questions.
*
* @summary All components of allQuestionList and disposes in a table
*
  @class AllQuestionList
*/

import React from 'react';
import AllQuestion from './allQuestion';


function AllQuestionList() {
  // This component only displays available question list in table
  return (
    <div className="row">
      <div className="col l3" />
      <div className="col l6 s12">
        <ul>
          <AllQuestion />
        </ul>
      </div>
      <div className="col l3" />
    </div>
  );
}

export default AllQuestionList;
