(function(){
'use strict';

angular
	.module('stimulApp')
	.service('httpService', serviceFunction)

	function serviceFunction($http){
    this.userData = null;
    this.messageData = null;
    this.historyData = null;
    var that = this;

    this.getUser = function() {
     /* promiseFunction('https://fathomless-everglades-3680.herokuapp.com/api/user/3', that.userData);*/
      var promise = $http.get('https://fathomless-everglades-3680.herokuapp.com/api/user/3');
      promise.then(function(answer) {
        that.userData = answer.data;
      }, error);
      return promise;
    };

    this.postUser = function(dataObj) {
      this.userData = dataObj;
      return $http.post('https://fathomless-everglades-3680.herokuapp.com/api/user/3', dataObj);
    };

    this.getHistory = function() {
      var promise = $http.get('src/assets/fakeData/history.json');
      promise.then(function(answer) {
        that.historyData = answer.data;
      }, error);
      return promise;
    };

    this.getMessage = function() {
      var promise = $http.get('src/assets/fakeData/messages.json');
      promise.then(function(answer) {
        that.messageData = answer.data;
      }, error);
      return promise;
    };

  /*  function promiseFunction(route, obj) {
      console.log(route, obj);
      var promise = $http.get(route);
      promise.then(function(answer, obj) {
        obj = answer.data;
        console.log(obj);
        console.log(that.userData);
      }, error);
      console.log(promise);
      return promise;
    }*/

    function  error(reason) {
      console.log('Sorry, something went wrong. The source data is unavailable.' + reason)
    }
	}

})();
