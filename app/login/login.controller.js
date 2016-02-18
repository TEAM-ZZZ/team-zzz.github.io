(function(){
  'use strict';

  angular
    .module('stimulApp')
    .controller('loginCtrl', checkLogin);
  function checkLogin ($scope, $state){
    $scope.showError = true;
	  $scope.showError = false;

    $scope.hideLogin = function() {
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