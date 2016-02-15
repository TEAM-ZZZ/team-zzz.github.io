(function(){
  'use strict';

  angular
    .module('stimulApp')
    .controller('profileCtrl', editProfile);

    function editProfile ($scope, $state){

      $scope.profile = function() {
        console.log("1");
        if ($scope.buttonValue === 'Edit'){
          console.log("2");
          $scope.buttonValue = 'Save';
          $state.go('personalPageEdit', {userProved: true});
        } else if($scope.buttonValue === 'Save') {
            console.log("3");
            $scope.buttonValue = 'Edit';
            $state.go('personalPage', {userProved: true});
        }
      };
    }
})();