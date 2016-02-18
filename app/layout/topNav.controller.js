(function(){
  'use strict';
  angular
    .module('stimulApp')
    .controller('topNavCtrl', topNav);

  function topNav($scope, $state){
    $scope.show = function(){
      return ($state.current.url.substr(1, 7) === "profile");
    }
		$scope.showME = false;
		$scope.click = function(){
		$scope.showME = !$scope.showME;
		}
  }
})();