module.exports = function User(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.hasAccess = false;
  this.isLoggedIn = false;
  this.login = () => {
    if (this.hasAccess) {
      this.isLoggedIn = true;
      return this.isLoggedIn
    }
  };
  this.logout = () => {
    this.isLoggedIn = false;
    return isLoggedIn
  };
};
