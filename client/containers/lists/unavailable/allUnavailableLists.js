/**
* This file is responsible for rendering the unavailables lists.
*
* @summary Component for render unavailable lists.
*
* @class AllUnavailableLists
*/

import React, { Component } from 'react';
import { connect } from 'react-redux';
import UnavailableListItem from './unavailableListItem';

class AllUnavailableLists extends Component {
// This class manages all components of unavailable questions list
  renderUnavailableLists() {
    return this.props.unavailableListsData.map((list) => {
      return (
        <UnavailableListItem
          list={list}
          key={list.title}
        />
      );
    });
  }

  render() {
    return (
      <div className="row">
        <div className="col l3" />
        <div className="col l6 s12">
          <ul>
            {this.renderUnavailableLists()}
          </ul>
        </div>
        <div className="col l3" />
      </div>
    );
  }
}

// Get the state of unavailableListsData from redux
function mapStateToProps(state) {
  return {
    unavailableListsData: state.unavailableListsData,
  };
}

// Especify the unavailableListsData type and if it is requered on system
AllUnavailableLists.propTypes = {
  unavailableListsData: React.PropTypes.array.isRequired,
};

// Export the AllUnavailableLists component
export default connect(mapStateToProps)(AllUnavailableLists);
