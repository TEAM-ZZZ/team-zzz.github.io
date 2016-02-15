(function(){
  'use strict';
  
  angular
	.module ( 'stimulApp')
	.service('dataService', getData);
			
	function getData() {
       $http({
		  method: 'get',
		  url: '../content/js/list.json' 	
			}).then(sucsess, error);
		
		function sucsess(data) {
			personalData = data;
		}
		function error(err){
			console.log('Sorry, something went wrong. The source data is unavailable.')
		}
    };
		

})();
