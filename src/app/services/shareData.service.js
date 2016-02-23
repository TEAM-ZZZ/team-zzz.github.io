(function(){
  'use strict';
  angular
    .module('stimulApp')
    .factory('shareDataService', shareDataFunction);


    function shareDataFunction($rootScope){
      var sharedService = {};
      sharedService.message = null;

      sharedService.prepForBroadcast = function(msg) {
          this.message = msg;
          this.broadcastItem();
      };
      sharedService.broadcastItem = function() {
          $rootScope.$broadcast('handleBroadcast');
      };

      return sharedService;
    }

})();