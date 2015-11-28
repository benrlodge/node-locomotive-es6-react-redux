var locomotive = require('locomotive')
  , Controller = locomotive.Controller;

var pagesController = new Controller();

pagesController.main = function() {
  this.title = 'Home';
  this.render();
}

pagesController.register = function() {
  this.title = 'Register';

  this.messages = {
    error: this.req.flash('error')
  }

  this.render();
}

pagesController.login = function() {
  this.title = 'Login';
  
  this.messages = {
    info: this.req.flash('info'),
    error: this.req.flash('error'),
  }

  this.render();
}

pagesController.logout = function() {
  this.redirect('/login');
}

module.exports = pagesController;
