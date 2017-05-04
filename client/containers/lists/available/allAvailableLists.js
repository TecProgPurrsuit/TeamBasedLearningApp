
import React, { Component } from 'react';
import { connect } from 'react-redux';
import AvailableListItem from './availableListItem';

class AllAvailableLists extends Component {
// This class manages all components of available questions
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
function mapStateToProps(state) {
  return {
    availableListsData: state.availableListsData,
    currentUser: state.currentUser,
  };
}

AllAvailableLists.propTypes = {
  availableListsData: React.PropTypes.array.isRequired,
  currentUser: React.PropTypes.object.isRequired,
};

export default connect(mapStateToProps)(AllAvailableLists);