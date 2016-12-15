console.log('orders model');

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var OrderSchema = new mongoose.Schema({
  _customer: {type: Schema.Types.ObjectId, ref: 'Customer'}, 
  _product: {type: Schema.Types.ObjectId, ref: 'Product'},
  customer: String,
  product: String,
  quantity: Number
}, {timestamps: true})

var Order = mongoose.model('Order', OrderSchema);