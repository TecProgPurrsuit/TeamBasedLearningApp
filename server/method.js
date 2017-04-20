Accounts.onCreateUser((options, user) => {

  user.profile['name'] = options.name

  return user
});
