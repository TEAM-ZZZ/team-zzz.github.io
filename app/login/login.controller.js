(function(){
  'use strict';
  angular
    .module('stimulApp')
    .controller('loginCtrl', checkLogin);

  function checkLogin ($scope, $state){
    $scope.isLogin = false;

    $scope.showLogin = function() {
      $scope.isLogin = true;
      $scope.hideBtn = true;
    };
    $scope.isValid = function(login, password) {
      if (login === 'zzz' && password === 'zzz'){
        $state.go('profile/zzz', {userProved: true});
      }
    };
  }
})();