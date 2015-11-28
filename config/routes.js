// Draw routes.  Locomotive's router provides expressive syntax for drawing
// routes, including support for resourceful routes, namespaces, and nesting.
// MVC routes can be mapped to controllers using convenient
// `controller#action` shorthand.  Standard middleware in the form of
// `function(req, res, next)` is also fully supported.  Consult the Locomotive
// Guide on [routing](http://locomotivejs.org/guide/routing.html) for additional
// information.
module.exports = function routes() {
  
  // Public facing pages
  this.root('pages#main');
  
  this.match('register', 'pages#register');
  this.match('login', 'pages#login');

  // User Login and Registration
  this.match('user/register', 'user#register', { via: 'POST'});
  this.match('user/login', 'user#login');
  this.match('logout', 'user#logout');
  
  // App
  this.match('app', 'app#main');

}
