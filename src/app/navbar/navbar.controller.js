(function(){
  'use strict';
  angular
    .module('stimulApp')
    .controller('navbarCtrl', topNav);

  function topNav($scope, $rootScope, $state, httpService, shareDataService){
    $scope.showProfileNav = $state.params.showProfileNav;
    $rootScope.$on('$stateChangeSuccess', function() {
      $scope.showProfileNav = $state.params.showProfileNav;
    });

    if($scope.showProfileNav && httpService.userData != null) {
      $scope.userData = httpService.userData;
      $scope.userData.fullName = $scope.userData.firstName + ' ' + $scope.userData.lastName;
    } else if($scope.showProfileNav) {
      httpService.getUser().then(success, error);
    }

    function success(answer) {
      $scope.userData = answer.data;
      $scope.userData.fullName = $scope.userData.firstName + ' ' + $scope.userData.lastName;
      shareDataService.prepForBroadcast($scope.userData);
    }
    function  error(reason) {
      console.log('Sorry, something went wrong. The source data is unavailable.' + reason)
    }


    $('.button-collapse').sideNav({
      closeOnClick: true
    });
  }
})();