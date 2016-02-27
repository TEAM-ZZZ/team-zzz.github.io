(function(){
'use strict';

angular
  .module('stimulApp')
  .controller('historyCtrl', historyCtrl);

  function historyCtrl($scope, $state, httpService) {
    $scope.sortDirection = false;
    $scope.search = '';

    $scope.sort = function(name){
      $scope.sortType = name;
      $scope.sortDirection = !$scope.sortDirection;
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
