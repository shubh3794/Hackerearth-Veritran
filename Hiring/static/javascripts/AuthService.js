/*Handles request to user registration, login, logout*/
'use strict';
// $q makes a promise which can be fulfilled or not fulfilled. so a = $q.defer(), it can resolve or reject
//a.resolve() means success, a.reject() means not fulfilled

app.factory('httpService',['$http', '$q', function($http,$q){
  //encodes params into correct format 
  var toparams = function(obj) {
    var p = [];
    for (var key in obj) {
        p.push(key + '=' + encodeURIComponent(obj[key]));
    }
    return p.join('&');
};
//makes a post using url and params as parameter
    var httpPost = function(url,params){
      params = toparams(params);
      var promise = $http.post(url, params,{
        headers:{
              'Content-Type': 'application/x-www-form-urlencoded'
        }
      }).then(
      function(response){
        return response.data;
      });
      return promise;
    };
//http get method wrapper
    var httpGet = function(url){
      var promise = $http.get(url, {
        headers:{
              'Content-Type': 'application/x-www-form-urlencoded'
        }
      }).then(
      function(response){
        return response.data;
      });
      return promise;
    };


    return{
      httpPost : function(url,params){
        return httpPost(url,params);
      },
      httpGet : function(url,params){
        return httpGet(url,params);
      }

    };
}]);

/* Takes care of authentication functionality and also stores user object for sharing among different controllers*/
app.factory('AuthService',
            ['httpService', '$location','constants','$q','$window', '$rootScope', function(httpService,$location,constants,$q,$window, $rootScope){
   
/* Function to do the search ingredients */
var search = function(quer) {
    var url = constants['API_SERVER'] + 'search/';
    var deferred = $q.defer();
    httpService.httpPost(url, {
                     'query':quer,
                 }).then(
  function(response) {
    deferred.resolve(response);

},
function(response) {
    deferred.reject(response);

});
return deferred.promise;};


var list = function(){
  var url = constants['API_SERVER'] + 'list/';
    var deferred = $q.defer();
    httpService.httpPost(url).then(
  function(response) {
    deferred.resolve(response);

},
function(response) {
    deferred.reject(response);

});
return deferred.promise;

  };


  return {
    list : function(){
    	return list();

    },
    search : function(query){
      return search(query);
    }
  };

}]);

