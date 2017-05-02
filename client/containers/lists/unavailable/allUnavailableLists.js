
import React, { Component } from 'react';
import { connect } from 'react-redux';
import UnavailableListItem from './unavailableListItem';

class AllUnavailableLists extends Component {
// This class manages all components of available questions
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
function mapStateToProps(state) {
  return {
    unavailableListsData: state.unavailableListsData,
  };
}

AllUnavailableLists.propTypes = {
  unavailableListsData: React.PropTypes.array.isRequired,
};

export default connect(mapStateToProps)(AllUnavailableLists);
