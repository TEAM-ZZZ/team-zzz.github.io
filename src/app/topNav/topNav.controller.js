(function(){
  'use strict';
  angular
    .module('stimulApp')
    .controller('topNavCtrl', topNav);

  function topNav($scope, $state){
    console.log($state);
    $scope.showLoginNav = $state.params.showLoginNav || false;
    $scope.showProfileNav = $state.params.showProfileNav || false;

    $('.button-collapse').sideNav({
      closeOnClick: true
    });
  }
})();