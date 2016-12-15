console.log("masterController");

var app = angular.module('app');

app.controller('customersController', ['$scope', '$location', 'customersFactory', function($scope, $location, customersFactory){
  console.log("customersController");
  $scope.newcustomer = {};
  $scope.customers = [];

  customersFactory.index(function(data){
    $scope.customers = data; 
  })
  $scope.addcustomer = function(){
    console.log("addcustomer");
    customersFactory.create($scope.newcustomer, function(newcustomer){
      $scope.customers.push(newcustomer);
      $scope.newcustomer = {}
    })
  }

  $scope.removecustomer = function(index){
    console.log($scope.customers[index]);
    var id = $scope.customers[index]._id; 
    customersFactory.delete(id, function(){
      $scope.customers.splice(index, 1);
      // $scope.customers = data; 
    })
  }

}])


app.controller('productsController', ['$scope', '$location', 'productsFactory', function($scope, $location, productsFactory){
  console.log("productsController");
  $scope.newproduct = {};
  $scope.products = [];

  productsFactory.index(function(data){
    $scope.products = data; 
  })
  $scope.addproduct = function(){
    console.log("addproduct");
    productsFactory.create($scope.newproduct, function(newproduct){
      $scope.products.push(newproduct);
      $scope.newproduct = {};
    })
  }

  $scope.removeproduct = function(index){
    console.log($scope.products[index]);
    var id = $scope.products[index]._id; 
    productsFactory.delete(id, function(){
      $scope.products.splice(index, 1);
      // $scope.products = data; 
    })
  }

}])

app.controller('ordersController', ['$scope', '$location', 'customersFactory', 'productsFactory', 'ordersFactory', function($scope, $location, customersFactory, productsFactory, ordersFactory){
  console.log("ordersController");
  $scope.customers = [];
  $scope.products = []; 
  customersFactory.index(function(data){
    $scope.customers = data; 
  })
  productsFactory.index(function(data){
    $scope.products = data; 
  })

  $scope.orders = []; 

  ordersFactory.index(function(data){
    $scope.orders = data; 
  })

  $scope.addorder = function(){
    console.log("addorder ", $scope.neworder);
    ordersFactory.create($scope.neworder, function(neworder){
      $scope.orders.push(neworder);
      $scope.neworder = {};
    })
  }  

}])
