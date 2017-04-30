import React, { Component } from 'react';
import AlternativeQuestionItem from './alternativeQuestionItem';

class AlternativeQuestionList extends Component {

  questionOrAlternative() {
    let itemName = '';
    if (this.props.listName === 'Questões') {
      itemName = 'Questão';
    } else if (this.props.listName === 'Alternativas') {
      itemName = 'Alternativa';
    }
    return itemName;
  }

  render() {
    return (
      <ul id="alternativesList" className="collection">
        <li className="collection-header center">
          {this.props.listName}
        </li>
        <AlternativeQuestionItem
          items={this.props.items}
          itemName={this.questionOrAlternative()}
        />
      </ul>
    );
  }
}

AlternativeQuestionList.propTypes = {
  listName: React.PropTypes.string.isRequired,
  items: React.PropTypes.array.isRequired,
};

export default AlternativeQuestionList;
