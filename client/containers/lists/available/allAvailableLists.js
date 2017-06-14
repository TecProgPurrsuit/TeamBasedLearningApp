/**
* This file is responsible for show to the user the avaiable lists
*
* @summary All the avaiable list of questions.
*
*/

import React, { Component } from 'react';
import { connect } from 'react-redux';
import AvailableListItem from './availableListItem';

class AllAvailableLists extends Component {
// This class manages all components of available questions list
  renderAvailableLists() {
    return this.props.availableListsData.map((list) => {
      return (
        <AvailableListItem
          list={list}
          currentUser={this.props.currentUser}
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
            {this.renderAvailableLists()}
          </ul>
        </div>
        <div className="col l3" />
      </div>
    );
  }
}

// Get the state of availableListsData and currentUser from redux
function mapStateToProps(state) {
  return {
    availableListsData: state.availableListsData,
    currentUser: state.currentUser,
  };
}

// Especify the availableListData and currentUser type and if it is requered on system
AllAvailableLists.propTypes = {
  availableListsData: React.PropTypes.array.isRequired,
  currentUser: React.PropTypes.object.isRequired,
};

// Export the RenderLists component
export default connect(mapStateToProps)(AllAvailableLists);
