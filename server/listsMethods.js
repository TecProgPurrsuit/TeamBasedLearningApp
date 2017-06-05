/**
* This file is responsible for creating Meteor Server Methods for lists
* management.

* @summary Lists Meteor methods.
*/

import SCHEMASLIST from '../lib/collections/schemas';
import { LISTSDB } from '../lib/collections/listsCollection';

/* global Meteor comes from Meteor Library*/
Meteor.methods({

  // This method validates the insertion then calls insert method.
  'lists.validateAndInsert': (data) => {
    // Find out if the user is valid
    // const isAdmin = Meteor.call('user.isAdmin');
    const isAdmin = true;

    // Create a validation context needed for isValid()
    const listValidationContext = SCHEMASLIST.List.newContext();

    // Checks if the new list matches the schema
    const isListValid = listValidationContext.validate(data);

    // If there's a validation error, the server console will show the error
    if (isListValid && isAdmin) {
      Meteor.call('lists.insert', data);
    } else {
      console.warn('lists.validateAndInsert - Validation or Authorization Failed.');
    }
  },

  /**
    * This method insert the data in the database, adding a 'createdAt' Date.
    * Even that the DB will not allow invalid data insertion, this SHOULD NOT
    * be used alone.
    */
  'lists.insert': (data) => {
    const actualDate = new Date();
    const newList = data;

    // Add to the list a date of creation and closed attribute
    newList.createdAt = actualDate;
    newList.closed = false;

    LISTSDB.insert(newList);
    console.warn('lists.insert - Ok.');
  },

  // This function returns all items in the database
  'lists.getAll': () => {
    // Find out if the user is valid
    let listData = [];
    listData = LISTSDB.find().fetch();
    return listData;
  },

  /**
   *  This function is responsible for get an array of lists that matches the
   *  parameters passed as arguments.
   *  For exemple, passing {_id: theWantedId}, will return the list that matches
   *  this id.
   *  Follow schemas.js for more information about the list parameters.
   */
  'lists.getByParameters': (parameters) => {
    // Find out if the user is valid
    const isAdmin = Meteor.call('user.isAdmin');
    let listData = null;

    if (isAdmin) {
      listData = LISTSDB.find(parameters).fetch();
    } else {
      // Do nothing - listData already null
    }

    return listData;
  },
});
