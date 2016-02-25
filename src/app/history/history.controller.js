(function(){
'use strict';

angular
  .module('stimulApp')
  .controller('historyCtrl', historyCtrl);

  function historyCtrl($scope, $state, httpService) {
    $scope.sortBack = false;
    $scope.search  = '';
		
    $scope.sort = function(name){
      $scope.sortType = name;
      $scope.sortBack = !$scope.sortBack;
    }

    httpService.getHistory().then(success, error);
    
    function success(responce) {
      $scope.historyData = responce.data;
    }
		
    function error(error) {
      console.log("Something goes wrong", error);
    }
  }
})();
