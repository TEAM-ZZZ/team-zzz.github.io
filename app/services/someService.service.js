(function(){
  'use strict';

  angular
	.module('stimulApp')
	.service('dataService', getData)
	
	function getData($http, $q){
		
      var deferObject,
	  
      myMethods = {
        getPromise: function() {
          var promise       =  $http.get('app/content/js/list.json'),
            deferObject =  deferObject || $q.defer();
			
			promise.then(                 
			  function(answer){               
				deferObject.resolve(answer);					
			  },
			  function(reason){       
				deferObject.reject(reason);
			  });

       return deferObject.promise;
        }
       };
 
    return myMethods;
 
    }

})();
