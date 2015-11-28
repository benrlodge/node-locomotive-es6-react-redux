// Draw routes.  Locomotive's router provides expressive syntax for drawing
// routes, including support for resourceful routes, namespaces, and nesting.
// MVC routes can be mapped to controllers using convenient
// `controller#action` shorthand.  Standard middleware in the form of
// `function(req, res, next)` is also fully supported.  Consult the Locomotive
// Guide on [routing](http://locomotivejs.org/guide/routing.html) for additional
// information.
module.exports = function routes() {
  this.root('pages#main');

  this.match('register', 'pages#register');
  this.match('login', 'pages#login');

  this.match('user/register', 'user#register', { via: 'POST'});
  this.match('user/login', 'user#login', { via: 'GET'});

}
