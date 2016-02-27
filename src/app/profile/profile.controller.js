(function(){
  'use strict';

  angular
    .module('stimulApp')
    .controller('profileCtrl', editProfile);

    function editProfile ($scope, $state, $timeout, httpService, authFactory) {
      $scope.selection = 'stable';

      httpService.getUser().then(success, error);

      $scope.profileEdit = function() {
        $scope.selection = 'edit';
        $timeout(function(){
          $('.collapsible').collapsible({accordion : false});
        }, 1);
      };

      $scope.profileSave = function() {
        $scope.selection = 'stable';
        $scope.userData.firstName = $scope.userData.fullName.split(' ')[0];
  		  $scope.userData.lastName = $scope.userData.fullName.split(' ')[1];

        var data = {
          avatar: $scope.userData.avatar,
          firstName: $scope.userData.firstName,
          lastName: $scope.userData.lastName,
          age: $scope.userData.age,
          gender: $scope.userData.gender
        };

        httpService.postUser(data).then(successPost, errorPost);
      };

      function success(responce) {
         $scope.userData  = responce.data;
      }
      function error(error) {
        console.log("Something goes wrong", error);
      }
      function successPost(answer) {
        console.log("Json is sent successfully");
      }
      function  errorPost(reason) {
        console.log('Sorry, something went wrong.' + reason);
      }
    };

})();