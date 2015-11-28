var bcrypt = require('bcrypt');

var genHash = function(cb){
  bcrypt.genSalt(10, function(err, salt) {
    bcrypt.hash('B4c0/\/', salt, function(err, hash) {
      cb(err, hash);
    });
  });
}

module.exports = genHash;
