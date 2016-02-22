(function(){
  'use strict';
  angular
    .module('stimulApp')
    .controller('topNavCtrl', topNav);

  function topNav($scope, $state, httpService){
    $scope.showLoginNav = $state.params.showLoginNav || false;
    $scope.showProfileNav = $state.params.showProfileNav || false;

    if(httpService.userData != null){
      $scope.userData = httpService.userData;
    } else {
      httpService.getUser().then(success, error);
    }
    function success(answer) {
      $scope.userData = answer.data;
    }
    function  error(reason) {
      console.log('Sorry, something went wrong. The source data is unavailable.' + reason)
    }
    $('.button-collapse').sideNav({
      closeOnClick: true
    });
  }
})();