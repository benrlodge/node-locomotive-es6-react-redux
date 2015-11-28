var locomotive = require('locomotive');
var Controller = locomotive.Controller;
var User = require('../models/user');
var bcrypt = require('bcrypt-nodejs');

var userController = new Controller();


userController.logout = function() {
  this.req.session.username = null;
  this.req.session.isAdmin = false;
  this.redirect('/login');
}

userController.login = function() {
  var req = this.req;
  var _this = this;

  var username = this.param('username');
  var password = this.param('password');

  User.find({ username: username }, function(err, user) {
    if (err) throw err;
    
    if (user.length === 0) {
      req.flash('error', 'No username in our system matches ' + username);
      _this.redirect('/login');
      return;
    }
          
    bcrypt.compare(password, user[0].password, function(err, res) {
        if (res === true) {
          req.session.username = username;
          req.session.isAdmin = user[0].permission === 2 ? true : false;
          _this.redirect('/app');
        }
        else {
          req.flash('error', 'Invalid username or password');
          _this.redirect('/login');
        }
    });
  });

}

userController.register = function() {
  var req = this.req;
  var _this = this;

  var username = this.param('username');
  var password = this.param('password');
  var created_timestamp = Date.now();
  var hash = bcrypt.hashSync(password);

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

      // to do: pass specific error message to user
      req.flash('error', message);
      // to do: pass username back to register form
      _this.redirect('/register');
    }

    else {
      req.flash('info', 'You have successfully registered. Now you can login.')
      // to do: pass login name into form
      _this.redirect('/login');
    }

  });
  
};


module.exports = userController;
