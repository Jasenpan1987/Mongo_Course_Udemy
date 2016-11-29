var mongoose = require('mongoose');
var User = require('./user');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/users_test');

var joe = new User({ name: 'Joe'});
// joe.save(function(err){
//   if(err) throw err;
//
//   User.update({name: 'Joe'}, {name: 'Bill'}, function(err1){
//     if(err1) throw err1;
//     User.find({}, function(err2, users){
//       if(err2) throw err2;
//       console.log(users)
//     })
//   })
// })
joe.save().then(() => {
  joe.update({name: 'King'}).then(User.find({})).then(users => {
    console.log(users)
  })
})
