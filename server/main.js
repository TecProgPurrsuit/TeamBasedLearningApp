import { Meteor } from 'meteor/meteor';
// This function allows the database to be shown in client side, as long the
// client calls a subscribe method.
Meteor.startup(() => {
  Meteor.publish('Lists', () => {
    return Lists.find();
  });
});
