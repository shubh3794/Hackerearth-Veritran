'use strict';
app.controller('IndexController', ['$scope', '$location', 'AuthService', function ($scope, $location, AuthService) {
var username = $scope.searchQuery;

$scope.search = function(){
  var query=$scope.searchQuery
  if(query != ''){
    AuthService.search(query).then(function(response){
      $scope.result = response;
      console.log(response);
    },function(error) {
      console.log(error);
    });
  }
  else{
    alert('invalid query');
  }
};

 $scope.list = function(){
  AuthService.list().then(function(response){
      $scope.result = response;
      console.log(response);
    },function(error) {
      console.log(error);
    });
};

}]);