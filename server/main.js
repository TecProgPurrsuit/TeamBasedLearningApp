import { Meteor } from 'meteor/meteor';
import { LISTSDB } from '../lib/collections/listsCollection';
// This function allows the database to be shown in client side, as long the
// client calls a subscribe method.
Meteor.publish('LISTSDB', () => {
  return LISTSDB.find();
});

Meteor.startup(() => {
  // code to run on server at startup
});
