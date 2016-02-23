(function(){
'use strict';

angular
	.module('stimulApp')
	.service('httpService', serviceFunction);

	function serviceFunction($http){
    this.userData = null;
    this.messageData = null;
    this.historyData = null;
    var that = this;

    this.postUser = function(dataObj) {
      this.userData = dataObj;
      return $http.post('https://fathomless-everglades-3680.herokuapp.com/api/user/3', dataObj);
    };

    this.getUser = function() {
      return getPromise('https://fathomless-everglades-3680.herokuapp.com/api/user/3', 'userData');
    };

    this.getHistory = function() {
		  return getPromise('src/assets/fakeData/history.json', 'historyData');
    };

    this.getMessage = function() {
	    return getPromise('src/assets/fakeData/messages.json', 'messageData');
    };

    function getPromise(route, storageData) {
      var promise = $http.get(route);
      promise.then(function(answer) {
        that[storageData] = answer.data;
      }, error);

      return promise;
    }

    function  error(reason) {
      console.log('Sorry, something went wrong. The source data is unavailable.' + reason);
    }
	}

})();
