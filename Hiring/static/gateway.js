'use strict';
var app = angular.module('gateway', [
      'ngRoute'
    ]);
/**
* @name run
* @desc Update xsrf $http headers to align with Django's defaults
*/
app.config(['$routeProvider','$locationProvider', '$httpProvider', '$controllerProvider', function($routeProvider,$locationProvider,$httpProvider,$controllerProvider) {

$controllerProvider.allowGlobals();

$routeProvider.when('/', {
  controller: 'IndexController',
  templateUrl: '/static/templates/landingPage.html'
});

$locationProvider.html5Mode(true);
$locationProvider.hashPrefix('!');
}]);

app.run(['$http',function($http){
  $http.defaults.xsrfHeaderName = 'X-CSRFToken';
  $http.defaults.xsrfCookieName = 'csrftoken';
}]);

var constantData = {
  'constants': {
    'API_SERVER':'http://127.0.0.1:8000/',
  }
};

app.constant('constants',constantData['constants']);
