var locomotive = require('locomotive')
  , Controller = locomotive.Controller;

var pagesController = new Controller();

pagesController.main = function() {
  this.title = 'Home';
  this.render();
}

pagesController.register = function() {
  this.title = 'Register';
  this.render();
}

pagesController.login = function() {
  this.title = 'Login';
  this.render();
}

module.exports = pagesController;
