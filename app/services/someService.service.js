(function(){
  'use strict';

  angular
	.module('stimulApp')
	.service('dataService', getData);

	function getData($http) {

    this.personalData = function() {

      $http({
        method: 'get',
        url: 'app/content/js/list.json'
        }).then(sucsess, error);

      function sucsess(data) {
        return data;
      }
      function error(err){
        console.log('Sorry, something went wrong. The source data is unavailable.')
      }
      };

    }

})();
