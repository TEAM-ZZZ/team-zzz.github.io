(function(){
  'use strict';

  angular
    .module('stimulApp')
    .controller('profileCtrl', editProfile);

    function editProfile ($scope, $state){
      $scope.buttonValue = 'Edit';

      $scope.profile = function(buttonValue) {
        if (buttonValue === 'Edit'){
          $scope.buttonValue = 'Save';
          $state.go('profile/zzz/edit', {userProved: true});
        } else if(buttonValue === 'Save') {
            $scope.buttonValue = 'Edit';
            $state.go('profile/zzz', {userProved: true});
        }
      };
    }
})();