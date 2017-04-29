import { Meteor } from 'meteor/meteor';
import SCHEMASLIST from '../lib/collections/schemas';
import { LISTSDB } from '../lib/collections/listsCollection';

Meteor.methods({
  'lists.insert': (newList) => {
    // Create a validation context needed for isValid()
    const listValidationContext = SCHEMASLIST.List.newContext();

    // Checks if the new list matches the schema
    const isListValid = listValidationContext.validate(newList);

    // If there's a validation error, the server console will show the error
    if (isListValid) {
      LISTSDB.insert(newList);
      console.warn('lists.insert - Ok.');
    } else {
      console.warn('lists.insert - Validation Failed.');
    }
  },
});
