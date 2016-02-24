(function(){
'use strict';

angular
  .module('stimulApp')
  .controller('historyCtrl', historyCtrl);

  function historyCtrl($scope, $state, httpService) {
    $scope.sortType = 'name';
    $scope.sortReverse = false;
    $scope.search  = '';

   
      httpService.getHistory().then(success, error);
    

    function success(responce) {
      $scope.historyData = responce.data;
    }
    function error(error) {
      console.log("Something goes wrong", error);
    }
  }
})();