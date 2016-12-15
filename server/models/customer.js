console.log('customer model');

var mongoose = require('mongoose');

var CustomerSchema = new mongoose.Schema({
  name: String
}, {timestamps: true})

var Customer = mongoose.model('Customer', CustomerSchema);