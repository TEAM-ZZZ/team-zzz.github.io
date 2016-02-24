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
        $state.go('root.profile');
      } else {
        $scope.showError = 'true';
      }
    };

    $scope.clearForm = function() {
      $scope.temp = null;
      $scope.userForm.$setUntouched();
      $scope.userForm.$setPristine();
    }

    $('.modal-trigger').leanModal();
  }
})();