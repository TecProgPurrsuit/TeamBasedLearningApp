import React from 'react';

function UnavailableListItem(props) {
  return (
    <div className="card available-card-container" key={props.list.description}>
      <div className="card-content available-card">
        <span className="card-title grey-text text-darken-4">
          {props.list.title}
        </span>
        <div className="card-stacked">
          <div className="card-content available-card">
            <p>{props.list.description}</p>
          </div>
          <div className="available-card-button" />
        </div>
      </div>
      <div className="card-reveal">
        <span className="card-title grey-text text-darken-4"><i className="material-icons right">close</i></span>
        <div className="card-tabs">
          <ul className="tabs tabs-fixed-width" />
        </div>
        <div className="card-content grey lighten-4" />
      </div>
    </div>
  );
}

UnavailableListItem.propTypes = {
  list: React.PropTypes.object.isRequired,
};

export default UnavailableListItem;
