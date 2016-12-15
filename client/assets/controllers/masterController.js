console.log("masterController");

var app = angular.module('app');

app.controller('customersController', ['$scope', '$location', function($scope, $location){
  console.log("customersController");
  $scope.customers = [
    {
      name: "Michael Choi"
    },
    {
      name: "Michael Choi"
    },
    {
      name: "Michael Choi"
    },
    {
      name: "Michael Choi"
    }
  ]; 
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

// app.controller('newController', ['$scope', '$location', 'friendsFactory', function($scope, $location, friendsFactory){
//   console.log("newController");
//   $scope.newfriend = {
//     firstname: '', lastname: '', birthday: ''
//   }
//   $scope.addfriend = function(){
//     console.log("addfriend");
//     friendsFactory.create($scope.newfriend, function(){
//       // $scope.friends.push($scope.newfriend);
//       // $scope.newfriend = {
//       //   firstname: '', lastname: '', birthday: ''
//       // }
//       $location.url('/');
//     })
//   }
// }])