console.log("appjs");
var app = angular.module('app', ['ngRoute']);
app.config(function($routeProvider){
  $routeProvider
  .when('/', {
    templateUrl: 'partials/dashboard.html'
  })
  .when('/customers', {
    templateUrl: 'partials/customers.html'
  })
  .when('/products', {
    templateUrl: 'partials/products.html'
  })
  .when('/orders', {
    templateUrl: 'partials/orders.html'
  })
})