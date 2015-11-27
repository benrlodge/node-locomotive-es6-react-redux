var path = require('path');

module.exports.getConfig = function(type) {

  var isDev = type === 'development';

  var config = {

    entry: {
      public_main: './static/scripts/public_main.js',
      dashboard_main: './static/scripts/dashboard_main.js'
    },

    output: {
      path: __dirname,
      filename: '[name].js'
    },

    debug : isDev,
    module: {
      loaders: [{
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }]
    }
  };

  if(isDev){
    config.devtool = 'eval';
  }

  return config;
}
