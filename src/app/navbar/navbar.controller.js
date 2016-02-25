(function(){
  'use strict';
  angular
    .module('stimulApp')
    .controller('navbarCtrl', topNav);

  function topNav($scope, $rootScope, $state, httpService, localStorageService){
    $scope.showProfileNav = $state.params.showProfileNav;

    $rootScope.$on('$stateChangeSuccess', function() {
      $scope.showProfileNav = $state.params.showProfileNav;

      if ($scope.showProfileNav)
        httpService.getUser().then(success, error);
    });

    $scope.logout = function() {
      localStorageService.clearAll();
    };

    function success(responce) {
      $scope.userData = responce.data;
      $scope.userData.fullName = $scope.userData.firstName + ' ' + $scope.userData.lastName;
    }
    function  error(reason) {
      console.log('Sorry, something went wrong. The source data is unavailable.' + reason)
    }

    $('.button-collapse').sideNav({
      closeOnClick: true
    });
  }
})();