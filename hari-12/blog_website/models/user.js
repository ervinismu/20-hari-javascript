var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt-nodejs');

var userSchema = new Schema(
  {
    username: { type: String, required: true },
    password: { type: String, required: true }
  }
)

userSchema.methods.hashPassword = function(password){
  return bcrypt.hashSync(password, bcrypt.genSaltSync(10));
};

userSchema.methods.comparePassword = function(password, hash){
  return bcrypt.compareSync(password, hash);
};

module.exports = mongoose.model('User', userSchema);
