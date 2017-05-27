Meteor.methods({
  'userInsert': (user) => {
    check(user, {
      username: String,
      password: String,
      profile: {
        name: String,
        email: String,
        group: String,
        name_of_class: String,
        is_teacher: Boolean
      }
    });

    const userExists = Accounts.findUserByUsername(user.username);

    if(!userExists) {
      return Accounts.createUser(user);
    } else {
      console.log("Usuário já existe!")
    }
  },

  'userUpdate': (user) => {
    check(user, {
      username: String,
      password: String,
      profile: {
        name: String,
        email: String,
        group: String,
        name_of_class: String,
        is_teacher: Boolean
      }
    });
  },

})
