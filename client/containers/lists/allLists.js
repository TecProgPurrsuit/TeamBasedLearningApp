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
