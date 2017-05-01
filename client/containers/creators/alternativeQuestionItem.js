import React, { Component } from 'react';

class AlternativeQuestionItem extends Component {
  renderItems() {
    let key = '';

    return this.props.items.map((item, index) => {
      if (this.props.itemName === 'Questão') {
        key = item.description;
      } else {
        key = item.alternativeDescription;
      }
      return (
        <li key={key} className="collection-item">
          <div>
            {this.props.itemName} #{index + 1}
            <a href="#!" className="secondary-content"><i className="material-icons">delete</i></a>
            <a href="#!" className="secondary-content"><i className="material-icons">edit</i>&ensp;</a>
          </div>
        </li>
      );
    });
  }

  render() {
    return (
      <div>
        {this.renderItems()}
      </div>
    );
  }
}

AlternativeQuestionItem.propTypes = {
  items: React.PropTypes.array.isRequired,
  itemName: React.PropTypes.string.isRequired,
};

export default AlternativeQuestionItem;
