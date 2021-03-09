const mongoose = require('mongoose');
const { Schema } = mongoose;

const jobSchema = new Schema({
  firma: String,
  position: String,
  von: String,
  bis: String
});

module.exports = mongoose.model('job', jobSchema);