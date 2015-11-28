// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  permission: { type: Number, default: 1},
  created_at: Date,
  updated_at: Date
});

// turns duplicate errors into regular Mongoose validation errors.
userSchema.plugin(require('mongoose-beautiful-unique-validation'));

// the schema is useless so far
// we need to create a model using it
var User = mongoose.model('User', userSchema);

// make this available to our users in our Node applications
module.exports = User;
