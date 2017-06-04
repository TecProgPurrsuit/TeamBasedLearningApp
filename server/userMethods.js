/**
* This file is responsible for creating Meteor Server Methods for user
* management.

* @summary User Meteor methods.
*/

/* global Meteor comes from Meteor Library*/

Meteor.methods({
  // This function is responsible for finding out if the user is the professor/admin
  'user.isAdmin': () => {
    const user = Meteor.user();
    let isAdmin = false;

    /* If the user is not null and if the user is an admin,
     * the isAdmin variable will be set to true.
     */
    const userAdminStatus = user.profile.is_teacher;
    const userValid = (user !== null && userAdminStatus !== null);

    if (userValid) {
      isAdmin = userAdminStatus;
    } else {
      // Do nothing - isAdmin already false.
    }

    return isAdmin;
  },
});
