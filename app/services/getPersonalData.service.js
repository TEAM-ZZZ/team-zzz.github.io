(function(){
  'use strict';

  angular
	.module('stimulApp')
	.service('dataService', getData)

	function getData($http, $q){

      
    this.getUserData = function() {
      return $http.get('https://fathomless-everglades-3680.herokuapp.com/api/user/3');
    };

    this.saveUserData = function(dataObj) {
     
      return $http.post('https://fathomless-everglades-3680.herokuapp.com/api/user/3', dataObj);
    }
  

})();
