(function(){
  'use strict';

  angular
    .module('stimulApp')
    .controller('profileCtrl', editProfile);

    function editProfile ($scope, $state, userService){
      userService.getData().then(success, error);

      $scope.selection = 'stable';

      $scope.profileEdit = function() {
        $scope.selection = 'edit';
        setTimeout(function(){
          $('.collapsible').collapsible({accordion : false});
        }, 100);
      };
      $scope.profileSave = function() {
  		  var dataObj = null;
        $scope.selection = 'stable';
        $scope.userData.firstName = $scope.userData.fullName.split(' ')[0];
  		  $scope.userData.lastName = $scope.userData.fullName.split(' ')[1];

        dataObj = {
          avatar: $scope.userData.avatar,
          firstName: $scope.userData.firstName,
          lastName: $scope.userData.lastName,
          age: $scope.userData.age,
          gender: $scope.userData.gender
        };

        userService.saveData(dataObj).then(successPost, errorPost);
      };



      function success(answer) {
        $scope.userData = answer.data;
        $scope.userData.fullName = $scope.userData.firstName + ' ' + $scope.userData.lastName;
      }
      function  error(reason) {
        console.log('Sorry, something went wrong. The source data is unavailable.' + reason)
      }
      function successPost(answer) {
        console.log(answer);
      }
      function  errorPost(reason) {
        console.log('Sorry, something went wrong.' + reason);
      }
    };

})();