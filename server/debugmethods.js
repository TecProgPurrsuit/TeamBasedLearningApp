/**
* This file is responsible for creating Meteor Server Methods for development
* purposes.
* WARNING: Make sure to use this methods only in the meteor shell for development.
*
* @summary Debug/development Meteor methods
*/

/* The comment below is needed for removing an ESLint error that cannot be
 * used in the case below (User ID)
 */
/* eslint no-underscore-dangle: ["error", { "allow": ["_id"] }] */
/* global Meteor comes from Meteor Library*/
Meteor.methods({

  // This method is responsible for showing all available users
  'debug.showUsers': () => {
    // If not in development mode, this request will fail - Security reasons
    if (Meteor.isDevelopment) {
      // Access the user collection and parses it to important data
      const allUsers = Meteor.users.find().fetch();
      console.warn(allUsers);
    } else {
      throw new Meteor.Error('debug.showUsers.unauthorized',
        'Cannot show users if you are not in Meteor development environment');
    }
  },

  /* This function is responsible for set the current user to admin (Teacher).
   * It will only work if Meteor.isDevelopment is true and the user is not null.
   * USE THIS FUNCTION TO SET THE ADMIN! DO NOT USE 'debug.setAdmin'!
   */
  'debug.userToAdmin': (userId) => {
    if (Meteor.isDevelopment) {
      const actualUser = Meteor.users.findOne({ _id: userId });

      Meteor.call('debug.setAdmin', actualUser);
    } else {
      // Since this is a security risk, the application stops if not authorized
      throw new Meteor.Error('debug.setAdmin.unauthorized',
        'Cannot set current user to admin if you are not in Meteor development environment');
    }
  },

  // This function checks the actual user and set it to admin.
  'debug.setAdmin': (user) => {
    if (user !== null) {
      // Gets the current user id - Needed for update() in user collection
      const userId = user._id;

      // Sets the actual user to admin
      Meteor.users.update(userId, {
        $set: { 'profile.is_teacher': true },
      });

      console.warn(`debug.setAdmin: ${userId} is now a Admin.`);
    } else {
      console.warn('debug.setAdmin: Cannot give admin to an empty user.');
    }
  },
});
