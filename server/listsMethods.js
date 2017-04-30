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
    const actualUser = Meteor.user();
    const isAdmin = actualUser.profile.is_teacher;

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

  /** This method insert the data in the database, adding a 'createdAt' Date.
    * Even that the DB will not allow invalid data insertion, this SHOULD NOT
    * be used alone.
    */
  'lists.insert': (data) => {
    const actualDate = new Date();
    const newList = data;

    // Add to the list a date of creation
    newList.createdAt = actualDate;

    LISTSDB.insert(newList);
    console.warn('lists.insert - Ok.');
  },
});
