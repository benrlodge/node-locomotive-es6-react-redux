# node-locomotive-es6-react-redux

A front-end setup for [http://locomotivejs.org/](locomotive.js).

### About and Overview

What you've got here is a front-end web-app starter kit built along side the Locomotive.js Express/Node framework.

To those less familiar with Locomotive.js, you could say Locomotive.js is to Node.js what Ruby on Rails is to Ruby, that is, a framework that support MVC patterns, RESTful routes, and convention over configuration.

Locomotive.js is a great project that allows you start write node apps fast, without worrying about all the boilerplate involved. However, it leaves the front-end up to you.

Therefore, I started this project with the same intention that Locomotive.js was for the backend, but for the the front-end.

It embraces modern development tools including Webpack, ES6, React, and Redux.

### Gulp, Webpack and ES6

Static assets are packaged together with Gulp and Webpack. Two javascript entry points are available, `public_main` for the public aspect of the website, and `app_main` for the app that is accessed by logging in.

Webpack enables you to write ES6 using Babel.

### Stylus

CSS is written using Stylus. A directory structure has been started for your convenience including base and layout styles, a variables file to import, and a component directory for your React components.

### Login and Registration

Includes a simple login/registration using Mongooose, and MongoDB.

### React and Redux

The app portion is a SPA that uses React and Redux.

### To Do
 * ~~User model with MongoDB and Mongoose~~
 * Login/Register/Session functionality
 * Basic dashboard using React and Redux
