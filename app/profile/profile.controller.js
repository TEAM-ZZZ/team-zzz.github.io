(function(){
  'use strict';

  angular
    .module('stimulApp')
    .controller('profileCtrl', editProfile);

    function editProfile ($scope, $state, dataService){
      dataService.getUserData().then(success, error);

      $scope.selection = 'stable';

      $scope.profileEdit = function() {
        $scope.selection = 'edit';
      };

      $scope.profileSave = function() {
        var dataObj = {
          avatar: $scope.userData.avatar,
          firstName: ($scope.fullName.split(' '))[0],
          lastName: ($scope.fullName.split(' '))[1],
          age: $scope.userData.age,
          gender: $scope.userData.gender
        };

        dataService.saveUserData(dataObj).then(success, error);
        $scope.selection = 'stable';

        function success(answer) {
          console.log(answer);
        }

        function  error(reason) {
          console.log('Sorry, something went wrong.' + reason)
        }
      };

      function success(answer) {
       console.log(answer.data);
        $scope.userData = answer.data;
        $scope.fullName = $scope.userData.firstName + ' ' + $scope.userData.lastName;
      }
      function  error(reason) {
        console.log('Sorry, something went wrong. The source data is unavailable.' + reason)
      }

    };



})();