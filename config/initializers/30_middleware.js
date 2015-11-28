var express = require('express')
  , poweredBy = require('connect-powered-by')
  , session = require('express-session')

module.exports = function() {
  // Use middleware.  Standard [Connect](http://www.senchalabs.org/connect/)
  // middleware is built-in, with additional [third-party](https://github.com/senchalabs/connect/wiki)
  // middleware available as separate modules.
  if ('development' == this.env) {
    this.use(express.logger());
  }

  this.use(poweredBy('Locomotive'));
  this.use(express.favicon());
  this.use(express.static(__dirname + '/../../public'));
  this.use(express.bodyParser());
  this.use(express.methodOverride());
  this.use(express.cookieParser('keyboardKittyCatEatsTheSpicyChickeFingersAndDanciesTheChickenDance'));
  this.use(express.session());
  this.use(session({secret: 'keyboardKittyCatEatsTheSpicyChickeFingersAndDanciesTheChickenDance'}));
  this.use(this.router);
  this.use(express.errorHandler());
}
