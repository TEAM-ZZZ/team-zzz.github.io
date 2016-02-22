(function(){
'use strict';

angular
  .module('stimulApp')
  .controller('historyCtrl', historyCtrl);

  function historyCtrl($scope, $state, httpService) {
    $scope.sortType = 'name';
    $scope.sortReverse = false;
    $scope.search  = '';

    if(httpService.historyData != null) {
      $scope.historyData = httpService.historyData;
    } else {
      httpService.getHistory().then(success, error);
    }

    function success(answer) {
      $scope.historyData = answer.data;
    }
    function error(error) {
      console.log("Something goes wrong", error);
    }
  }
})();