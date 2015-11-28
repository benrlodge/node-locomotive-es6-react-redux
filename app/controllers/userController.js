var locomotive = require('locomotive');
var Controller = locomotive.Controller;
var bcrypt = require('bcrypt');
var User = require('../models/user');

var userController = new Controller();

userController.login = function() {
  var req = this.req;
  var _this = this;

  var username = this.param('username');
  var password = this.param('password');
  var loginHash = bcrypt.hashSync(password);

  User.find({ username: username }, function(err, user) {
    if (err) throw err;
    bcrypt.compare(password, user[0].password, function(err, res) {
        if (res === true) {
          req.session.username = username;
          req.session.isAdmin = true;
          _this.redirect('/app/dashboard');
        }
        else {
          req.flash('error', 'Invalid username or password');
          _this.redirect('/login');
        }
    });
  });

}

userController.register = function() {
  console.log('user controller: register');
  var req = this.req;
  var _this = this;

  var username = this.param('username');
  var password = this.param('password');
  var created_timestamp = Date.now();

  var hash = bcrypt.genSalt(10, function(err, salt) {
      bcrypt.hash('B4c0/\/', salt, function(err, hash) {
          var user = new User({
            username: username,
            password: hash,
            created_at: created_timestamp
          });

          user.trySave(function(err) {
            var message;
            if (err) {
              if (err.errors.username.properties.type === 'Duplicate value') {
                message = 'Sorry, but that username is already taken.'
              }
              console.log(err.kind);
              // to do: pass specific error message to user
              req.flash('error', message);
              // to do: pass username back to register form
              _this.redirect('/register');
            }
            else {
              req.flash('success', 'You have successfully registered. Now you can login.')
              // to do: pass login name into form
              _this.redirect('/login');
            }

          });
        });

      });
  };


module.exports = userController;
