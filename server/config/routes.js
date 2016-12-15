console.log('future routes');
var customers = require('./../controllers/customers.js');
var products = require('./../controllers/products.js');

module.exports = function(app){
  app.get('/customers', customers.index)
  app.get('/customers/:id', customers.show)
  app.post('/customers', customers.create)
  app.put('/customers/:id', customers.update)
  app.delete('/customers/:id', customers.delete)

  app.get('/products', products.index)
  app.get('/products/:id', products.show)
  app.post('/products', products.create)
  app.put('/products/:id', products.update)
  app.delete('/products/:id', products.delete)
}