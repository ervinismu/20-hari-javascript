var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ClientSchema = new Schema(
  {
    name: { type: String, required: true },
    address: { type: String, required: true },
    total_project: { type: Number, required: true },
    status: { type: String, required: true, enum: ['Done', 'Progress'], default: 'Done' },
  }
);

module.exports = mongoose.model('Client', ClientSchema);
