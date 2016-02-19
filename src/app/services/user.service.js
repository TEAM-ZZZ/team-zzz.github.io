(function(){
  'use strict';

  angular
	.module('stimulApp')
	.service('userService', serviceFunction)

	function serviceFunction($http){

    this.getData = function() {
      return $http.get('https://fathomless-everglades-3680.herokuapp.com/api/user/3');
    };

    this.saveData = function(dataObj) {
      return $http.post('https://fathomless-everglades-3680.herokuapp.com/api/user/3', dataObj);
    };
	}

})();
