var util = require('util');
var mongoose = require('mongoose');

var dbPath = process.env.MONGO_DB_URI || 'mongodb://localhost:27017/my_awesome_app';
mongoose.connect(dbPath);

mongoose.connection.on('connected', function () {
  console.log('Mongoose default connection open');
});

module.exports = function() {
  // Warn of version mismatch between global "lcm" binary and local installation
  // of Locomotive.
  if (this.version !== require('locomotive').version) {
    console.warn(util.format('version mismatch between local (%s) and global (%s) Locomotive module', require('locomotive').version, this.version));
  }
}
