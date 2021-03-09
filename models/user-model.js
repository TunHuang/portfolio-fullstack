const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  vorname: String,
  nachname: String,
  wohnort: String,
  beruf: String,
  email: String,
  passwort: String
});

module.exports = mongoose.model('user', userSchema);