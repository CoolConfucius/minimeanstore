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


}])

app.controller('ordersController', ['$scope', '$location', function($scope, $location){
  console.log("ordersController");
  $scope.orders = [
    {
      customername: "Michael Choi", 
      product: "Nike",
      quantity: 2,
      date: "April 3rd 2014"
    },
    {
      customername: "Michael Choi", 
      product: "Nike",
      quantity: 2,
      date: "April 3rd 2014"
    },
    {
      customername: "Michael Choi", 
      product: "Nike",
      quantity: 2,
      date: "April 3rd 2014"
    },
    {
      customername: "Michael Choi", 
      product: "Nike",
      quantity: 2,
      date: "April 3rd 2014"
    }
  ]; 
}])

// app.controller('newController', ['$scope', '$location', 'customersFactory', function($scope, $location, customersFactory){
//   console.log("newController");
//   $scope.newcustomer = {
//     firstname: '', lastname: '', birthday: ''
//   }
//   $scope.addcustomer = function(){
//     console.log("addcustomer");
//     customersFactory.create($scope.newcustomer, function(){
//       // $scope.customers.push($scope.newcustomer);
//       // $scope.newcustomer = {
//       //   firstname: '', lastname: '', birthday: ''
//       // }
//       $location.url('/');
//     })
//   }
// }])