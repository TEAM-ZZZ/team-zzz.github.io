(function(){
  'use strict';

  angular
    .module('stimulApp')
    .controller('profileCtrl', editProfile);

    function editProfile ($scope, $state, httpService, shareDataService) {
      if(shareDataService.message != null) {
        $scope.userData = shareDataService.message;
      }

      $scope.selection = 'stable';

      $scope.$on('handleBroadcast', function() {
          $scope.userData = shareDataService.message;
      });

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

        httpService.postUser(dataObj).then(successPost, errorPost);
      };

      function successPost(answer) {
        console.log("Json is sent successfully");
      }
      function  errorPost(reason) {
        console.log('Sorry, something went wrong.' + reason);
      }
    };

})();