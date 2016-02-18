(function(){
  'use strict';

  angular
    .module('stimulApp')
    .controller('loginCtrl', checkLogin);
	$scope.showError = true;
  function checkLogin ($scope, $state){
    $scope.isLogin = false;
	$scope.showError = false;
    $scope.showLogin = function() {
      $scope.isLogin = true;
      $scope.hideBtn = true;
    };
    $scope.hideLogin = function() {
      $scope.isLogin = false;
      $scope.hideBtn = false;
    };
    $scope.isValid = function(login, password) {
      if (login === 'zzz' && password === 'zzz'){
        $state.go('personalPage', {userProved: true});
		
      } else {
                $scope.showError = true;
          }
    };
  }
})();