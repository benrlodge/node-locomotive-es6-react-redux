# node-locomotive-webkit-gulp-es6

A front-end setup for [http://locomotivejs.org/](locomotive.js).

### About and Overview

What you've got here is a front-end web-app starter kit built along side the Locomotive.js Express/Node framework.

To those less familiar with Locomotive.js, you could say Locomotive.js is to Node.js what Ruby on Rails is to Ruby, that is, a framework that support MVC patterns, RESTful routes, and convention over configuration.

Locomotive.js is a great project that allows you start writing node apps fast, without worrying about much boilerplate. However, it leaves the front-end up to you.

Therefore, I started this project with the same intention that Locomotive.js was for the backend, but for the the front-end.

It embraces modern development tools including Webpack, ES6, React, and Redux.

### Gulp, Webpack and ES6

Static assets are packaged together with Gulp and Webpack. Two javascript entry points are available, `public_main` for the public aspect of the website, and `app_main` for the app that is accessed by registering an account and logging in. Webpack enables you to write ES6 using Babel.

### HTML
Locomotive.js, as with Express.js, comes preconfigured using EJS for templating, but Jade is so much better, so I'm using it here. Under the `/app/views` directory you will find a directory for layouts including a `public_layout` and an `app_layout`. Normal public pages are stored under `app/views/pages` which corresponds with the `pages` controller, and partials (eg footer, header) is stored under `app/views/partials`.

### CSS
CSS is written using Stylus. A directory structure has been started for your convenience including base and layout styles, a variables file to import, and a component directory for your React components.

### Fonts
Font-awesome is included in the gulp build.

### Login and Registration
Includes a simple login/registration using Mongooose, and MongoDB.
