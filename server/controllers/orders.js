console.log('orders controller');

var mongoose = require('mongoose');
var Order = mongoose.model('Order');
// var Cutomer = mongoose.model('Cutomer');
// var Product = mongoose.model('Product');

function OrdersController(){
  this.index = function(req, res){
    Order.find({})
    .populate(['_cutomers', '_products'])
    .exec(function(err, orders){
      res.json(orders);
    })
  };
  this.create = function(req, res){
    console.log(req.body);
    var order = new Order({
      _customer: req.body._customer, 
      _product: req.body._product, 
      quanity: req.body.quanity 
    });
    order.save(function(err, order){
      if(err){
        console.log(err);
        console.log('create method saving order');
      } else {
        console.log('successfully added a order!');
        console.log(order);
        res.json(order);
      }
    })
  };
  this.update = function(req, res){
    var editorder = {
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      birthday: req.body.birthday
    }
    Order.findOneAndUpdate({_id: req.params.id}, editorder, function(err, order){
      res.json(order);
    })

  };
  this.delete = function(req, res){
    console.log("orders delete req params ", req.params);
    Order.remove({_id: req.params.id}, function(err){
      if(err) {
        console.log('something went wrong. in delete in orders.js');
      } else { 
        console.log('successfully removed a order!');
        // res.redirect('/');
        res.end(); 
      }
    })

  };
  this.show = function(req, res){
    console.log(req.params);
    Order.findOne({_id: req.params.id}, function(err, order){
      res.json(order);
    })
  };
}
module.exports = new OrdersController();