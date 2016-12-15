console.log('product model');

var mongoose = require('mongoose');

var ProductSchema = new mongoose.Schema({
  name: String, 
  imageurl: String, 
  quanity: Number
}, {timestamps: true})

var Product = mongoose.model('Product', ProductSchema);