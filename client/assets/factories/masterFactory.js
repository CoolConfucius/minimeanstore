console.log('Master Factory');

app.factory('customersFactory', ['$http', function($http){
  var customers = []; 
  var customer = {}; 
  function CustomersFactory(){
    var _this = this;
    this.create = function(newcustomer,callback){
      $http.post('/customers', newcustomer).then(function(returned_data){
        console.log("returned_data: ", returned_data.data);
        if (typeof(callback) == 'function'){
          callback(returned_data.data);
        }
      });
    };
    this.update = function(id, editcustomer, callback){ 
      $http.put(`/customers/${id}`, editcustomer).then(function(data){
        console.log(data);
        if (typeof(callback) == 'function'){
          callback(data.data);
        }
      })
    };
    this.index = function(callback){
      $http.get('/customers').then(function(returned_data){
        console.log(returned_data.data);
        customers = returned_data.data;
        callback(customers);
      });
   //Note: this can be shortened to $http.get('/customers').then(callback); 
   //But only if you only want to run the callback from the controller.
    };
    this.delete = function(id, callback){
      console.log("id: ", id);
      $http.delete(`/customers/${id}`).then(function(data){
        // for (var i = customers.length - 1; i >= 0; i--) {
        //   if(customers[i]._id === id){
        //     customers.splice(i, 1);
        //     break; 
        //   }    
        // };
        console.log("data", data);
        if (typeof(callback) == 'function'){
          callback(data);
        } 
      })
    };
    this.show = function(id, callback){
      $http.get(`/customers/${id}`).then(function(data){
        console.log("show data: ", data);
        // customer = data; 
        callback(data.data); 
      })
    };
    // Sometimes you might not want to make a DB call, and just get the information stored in the factory.
    this.getCustomers = function(callback){
      callback(customers);
    };
    this.getCustomer = function(callback){
        callback(customer);
    };
  }
  // console.log(new CustomersFactory());
  return new CustomersFactory();
}])



app.factory('productsFactory', ['$http', function($http){
  var products = []; 
  var product = {}; 
  function ProductsFactory(){
    var _this = this;
    this.create = function(newproduct,callback){
      $http.post('/products', newproduct).then(function(returned_data){
        console.log("returned_data: ", returned_data.data);
        if (typeof(callback) == 'function'){
          callback(returned_data.data);
        }
      });
    };
    this.update = function(id, editproduct, callback){ 
      $http.put(`/products/${id}`, editproduct).then(function(data){
        console.log(data);
        if (typeof(callback) == 'function'){
          callback(data.data);
        }
      })
    };
    this.index = function(callback){
      $http.get('/products').then(function(returned_data){
        console.log(returned_data.data);
        products = returned_data.data;
        callback(products);
      });
   //Note: this can be shortened to $http.get('/products').then(callback); 
   //But only if you only want to run the callback from the controller.
    };
    this.delete = function(id, callback){
      console.log("id: ", id);
      $http.delete(`/products/${id}`).then(function(data){
        // for (var i = products.length - 1; i >= 0; i--) {
        //   if(products[i]._id === id){
        //     products.splice(i, 1);
        //     break; 
        //   }    
        // };
        console.log("data", data);
        if (typeof(callback) == 'function'){
          callback(data);
        } 
      })
    };
    this.show = function(id, callback){
      $http.get(`/products/${id}`).then(function(data){
        console.log("show data: ", data);
        // product = data; 
        callback(data.data); 
      })
    };
    // Sometimes you might not want to make a DB call, and just get the information stored in the factory.
    this.getProducts = function(callback){
      callback(products);
    };
    this.getProduct = function(callback){
        callback(product);
    };
  }
  // console.log(new ProductsFactory());
  return new ProductsFactory();
}])