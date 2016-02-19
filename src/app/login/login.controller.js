(function(){
  'use strict';

  angular
    .module('stimulApp')
    .controller('loginCtrl', checkLogin);

  function checkLogin ($scope, $state) {
	  $scope.showError = false;

    $scope.isValid = function(login, password) {
      if (login === 'zzz' && password === 'zzz') {
        $('#loginWindow').closeModal();
        $state.go('personalPage');
      } else {
        $scope.showError = 'true';
      }
    };

	  $scope.resetA = function() {
      $scope.temp={};
  		$scope.userForm.$setUntouched();
  		$scope.userForm.$setPristine();
    }

    $('.modal-trigger').leanModal();
  }
})();