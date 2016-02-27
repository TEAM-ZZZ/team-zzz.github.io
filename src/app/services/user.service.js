(function(){
'use strict';

angular
	.module('stimulApp')
	.service('httpService', serviceFunction);

	function serviceFunction($http, $q){
    var userData;
    var messageData;
    var historyData;

    this.postUser = function(data) {
      userData = data;
      return $http.post('https://fathomless-everglades-3680.herokuapp.com/api/user/3', data);
    };

    this.getUser = function() {
      if (userData) {
        var deferred = $q.defer();
        deferred.resolve(userData);
        return deferred.promise;
      }
      return $http.get('https://fathomless-everglades-3680.herokuapp.com/api/user/3')
        .then(function(data) {
          userData = data;
          return userData
        });
    };

    this.getHistory = function() {
	    if (historyData) {
        var deferred = $q.defer();
        deferred.resolve(historyData);
        return deferred.promise;
      }
      return $http.get('src/assets/fakeData/history.json')
        .then(function(data) {
          historyData = data;
          return historyData
        });
    };

    this.getMessage = function() {
	    if (messageData) {
        var deferred = $q.defer();
        deferred.resolve(messageData);
        return deferred.promise;
      }
      return $http.get('src/assets/fakeData/messages.json')
        .then(function(data) {
          messageData = data;
          return messageData
        });
    };

    function  error(reason) {
      console.log('Sorry, something went wrong. The source data is unavailable.' + reason);
    }
	}

})();
