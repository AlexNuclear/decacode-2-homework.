const User = require('./user.class');
const Admin = require('./admin.class');

const user = new User('Jar-jar', 'Binks');
const admin = new Admin("Obi", "Wan");

user.login();
admin.login();
console.log(user);
console.log(admin);
