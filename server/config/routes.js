console.log('future routes');
var customers = require('./../controllers/customers.js');

module.exports = function(app){
  app.get('/customers', customers.index)
  app.get('/customers/:id', customers.show)
  app.post('/customers', customers.create)
  app.put('/customers/:id', customers.update)
  app.delete('/customers/:id', customers.delete)
}