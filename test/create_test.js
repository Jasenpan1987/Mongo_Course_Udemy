const assert = require('assert');
const User = require('../src/user');

describe('Creating records', () => {
  it('saves a user', (done) => {
    // 1. create a new user
    const joe = new User({
      name: 'Joe'
    });

    // 2. save the user into database
    joe.save()
      .then(() => {
        //Mongoose gives each instance a isNew property, which is true initially and will set to false when it has been saved into db
        assert(!joe.isNew);
        done();
      })
  });
});
