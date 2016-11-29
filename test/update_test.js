const assert = require('assert');
const User = require('../src/user');

describe('Update record...', (done) => {
  let joe;
  beforeEach(() => {
    joe = new User({ name: 'Joe' });
    joe.save().then(() => {
      done();
    });
  });

  function assertName(operation, name, done){
    operation.then(() => User.find({}))
      .then(users => {
        assert(users.length == 1);
        assert(users[0].name == name);
        done();
      }).catch(err => {
        console.warn(err)
      });
  }

  it('Instance set and save', (done) => {
    joe.set('name', 'John');
    assertName(joe.save(), 'John', done);
  });

  // it('A model instance can update', done => {
  //   assertName(joe.update({ name: 'Alex' }), 'Alex', done)
  // });

  it('A model instance can update', done => {
    joe.update({ name: 'Alex'})
      .then(() => User.find({}))
      .then(users => {
        console.log('users', users); //users [ { _id: 583b0dc61617182c5053f801, name: 'Joe', __v: 0 } ]
        console.log('joe', joe); //joe { __v: 0, name: 'Joe', _id: 583b0dc61617182c5053f801 }
      })
  });
});
