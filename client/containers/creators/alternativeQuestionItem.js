import React, { Component } from 'react';

class AlternativeQuestionItem extends Component {
  renderItems() {
    return this.props.items.map((item, index) => {
      return (
        <div>
          <li key={item.description} className="collection-item">
            <div>
              {this.props.itemName} #{index + 1}
              <a href="#!" className="secondary-content"><i className="material-icons">delete</i></a>
              <a href="#!" className="secondary-content"><i className="material-icons">edit</i>&ensp;</a>
            </div>
          </li>
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        {this.renderItems()};
      </div>
    );
  }
}

AlternativeQuestionItem.propTypes = {
  items: React.PropTypes.array.isRequired,
  itemName: React.PropTypes.string.isRequired,
};

export default AlternativeQuestionItem;
