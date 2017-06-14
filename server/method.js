/* global Meteor */
Meteor.methods({

  /* Functionality tht insert a user on database */
  'userInsert': (user) => {
    /* global check that verify if the user attributes are correctly typed */
    check(user, {
      username: String,
      password: String,
      profile: {
        name: String,
        email: String,
        group: String,
        name_of_class: String,
        is_teacher: Boolean,
      },
    });

    /* global Accounts */
    const userExists = Accounts.findUserByUsername(user.username);

    /* Verify if user exists and return them */
    let currentUser;
    if (!userExists) {
      currentUser = Accounts.createUser(user);
    } else {
      console.warn('Usuário já existe!');
    }
    return currentUser;
  },
});
