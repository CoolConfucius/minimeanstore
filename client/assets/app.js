console.log("appjs");
var app = angular.module('app', ['ngRoute']);
app.config(function($routeProvider){
  $routeProvider
  .when('/', {
    templateUrl: 'partials/dashboard.html'
  })
  .when('/orders', {
    templateUrl: 'partials/orders.html'
  })


  .when('/new', {
    templateUrl: 'partials/new.html'
  })
  .when('/show/:id', {
    templateUrl: 'partials/show.html'
  })
  .when('/edit/:id', {
    templateUrl: 'partials/edit.html'
  })

})