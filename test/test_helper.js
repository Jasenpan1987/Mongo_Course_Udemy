const mongoose = require('mongoose');

mongoose.Promise = global.Promise; //plugin mongoose with the default es6 library

before((done) => {
  mongoose.connect('mongodb://localhost/users_test');

  mongoose.connection
    .once('open', () => {
      console.log('connection established!');
      done();
    })
    .on('error', (err) => {
      console.warn('Warning: '+err)
    });
})



beforeEach((done) => {
  mongoose.connection.collections.users.drop(() => {
    // ready to execute the next test
    done();
  });
})
