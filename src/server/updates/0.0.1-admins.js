const keystone = require('keystone');
const User = keystone.list('User');

exports = module.exports = function (done) {
  new User.model({
    name: { first: 'admin', last: 'user' },
    email: 'admin@keystonejs.com',
    password: 'admin',
    isAdmin: true,
  }).save(done);
};
