
const mongoose = require('mongoose');

const authSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true, trim: true, minlength: 3 },
  email:    { type: String, required: true, unique: true },
  password: { type: String, required: true },
  phone: { type: String, required: false },
  address: { type: String }
}, 
{ 
  timestamps: true // for created at & updated at
});

module.exports = mongoose.model('User', authSchema);