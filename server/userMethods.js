/**
* This file is responsible for creating Meteor Server Methods for user
* management.

* @summary User Meteor methods.
*/

/* global Meteor comes from Meteor Library*/

Meteor.methods({
  // This function is responsible for finding out if the user is the professor/admin
  'user.isAdmin': () => {
    const actualUser = Meteor.user();
    let isAdmin = false;

    if (actualUser !== null) {
      isAdmin = actualUser.profile.is_teacher;
    } else {
      // Do nothing - isAdmin already false.
    }

    return isAdmin;
  },
});
