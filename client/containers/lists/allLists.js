/**
* This file is responsible for show the avaiable and unavailable lists of questons to the user.
*
* @summary Showing all lists of questions.
*
*/

import React from 'react';
import AllAvailableLists from './available/allAvailableLists';
import AllUnavailableLists from './unavailable/allUnavailableLists';

function AllLists() {
  return (
    <div>
      <AllAvailableLists />
      <AllUnavailableLists />
    </div>
  );
}

export default AllLists;
