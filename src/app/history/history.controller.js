(function(){
  'use strict';

  angular
    .module('stimulApp')
    .controller('historyCtrl', historyCtrl);

		
    function historyCtrl ($scope, $state, $http){
			$scope.sortType     = 'name';
			$scope.sortReverse  = false;
			$scope.search   = '';
			
      $http.get('src/assets/fakeData/history.json').then(success, error);

      function success(answer) {
        $scope.historyData = answer.data;
        console.log($scope.historyData);
      }
      function error(error) {
        console.log("Something goes wrong", error);
      }
    }
})();