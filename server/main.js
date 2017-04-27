// import { Meteor } from 'meteor/meteor';
import fakeInitialData from '../lib/collections/fakeListData';
import { LISTSDB } from '../lib/collections/listsCollection';

// This function allows the database to be shown in client side, as long the
// client calls a subscribe method.
Meteor.publish('LISTSDB', () => {
  return LISTSDB.find();
});

// Function to run on server at each startup
Meteor.startup(() => {
  /** Each time which server get started, everything below runs.
    * For development purposes, each time the lists collection (LISTSDB) is
    * cleared and re-populated the the data in reducerFakeData.js.
    * The objects now in the LISTSDB are displayed in the terminal (Server).
    */

  LISTSDB.remove({});
  LISTSDB.insert(fakeInitialData);
});
