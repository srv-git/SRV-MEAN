
const mongoose = require('mongoose');

const CardSchema = new mongoose.Schema({
  name: { type: String, required: true },
  expiry: { type: String, required: true },
  number: { type: String, required: false, unique: true },
  cvv: { type: String, required: true }
});

module.exports = mongoose.model('Cards', CardSchema);