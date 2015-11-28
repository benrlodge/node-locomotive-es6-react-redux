var locomotive = require('locomotive')
  , Controller = locomotive.Controller;

var appController = new Controller();

appController.main = function() {
  this.title = 'App Home';
  
  if (this.req.session && this.req.session.username) {
    this.render();
  }
  
  else {
    // to do: send to unauthorized page
    this.redirect('/login');
  }

  
}

module.exports = appController;
