(function(){
  'use strict';

  angular
    .module('stimulApp')
    .controller('loginCtrl', checkLogin);

  function checkLogin ($scope, $state) {
	  $scope.showError = false;

    $scope.hideLogin = function() {
      $scope.hideBtn = false;
    };
    $scope.isValid = function(login, password) {
      if (login === 'zzz' && password === 'zzz') {
        $state.go('personalPage');
      } else {
        $scope.showError = true;
      }
    };
  }
})();