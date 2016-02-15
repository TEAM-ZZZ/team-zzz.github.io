(function(){
  'use strict';

  angular
	.module('stimulApp')
	.service('dataService', getData);

	function getData($http) {

    this.personalData = function() {
      console.log("function is running");
      return $http({
        method: 'get',
        url: 'app/content/js/list.json'
        }).then(sucsess, error);

      function sucsess(data) {
        console.log(data);
        this.personalData = data;
      }
      function error(err){
        console.log('Sorry, something went wrong. The source data is unavailable.')
      }
      };

    }

})();
