/**
* This file is responsible for rendering the alternatives question lists.
*
* @summary Component for rendering alternatives question lists.
*
* @class AlternativeQuestionList
*/

import React, { Component } from 'react';
import AlternativeQuestionItem from './alternativeQuestionItem';

class AlternativeQuestionList extends Component {

  questionOrAlternative() {
    let itemName = '';
    if (this.props.listName === 'Questões') {
      itemName = 'Questão';
    } else if (this.props.listName === 'Alternativas') {
      itemName = 'Alternativa';
    } else {
      // do nothing
    }
    return itemName;
  }

  render() {
    return (
      <ul id="alternativesList" className="collection with-header">
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

// Especify the attributes type
AlternativeQuestionList.propTypes = {
  listName: React.PropTypes.string.isRequired,
  items: React.PropTypes.array.isRequired,
};

// Export AlternativeQuestionList component
export default AlternativeQuestionList;
