const mongoose = require('mongoose');
const User = require('../src/user');
const assert = require('assert');

describe('Reading users out of the db...', () => {
  let joe;

  beforeEach((done) => {
    joe = new User({
      name: 'Joe'
    });
    joe.save()
      .then(() => {
        done();
      })
  });

  it('find the users with a name called joe', (done) => {
    User.find({name: joe.name}).then((users) => {
      //The joe instance will be assign an _id property before it saved, and it will be equal to the _id in the database
      //but users[0]._id does not equal to (=== or even ==) joe._id, we must toString() it, _id is not a raw string!!!
      assert(users[0]._id.toString() == joe._id.toString());
      done();
    })
  });

  it('find the user with a specific _id', done => {
    User.findById(joe._id)
    .then(user => {
      assert(user.name === 'Joe');
      done();
    })
  })
})
