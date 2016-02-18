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
		  $scope.userData.firstName = $scope.userData.fullName.split(' ')[0];
		  $scope.userData.lastName = $scope.userData.fullName.split(' ')[1]
        var dataObj = {
          avatar: $scope.userData.avatar,
          firstName: $scope.userData.firstName,
          lastName: $scope.userData.lastName,
          age: $scope.userData.age,
          gender: $scope.userData.gender
		  
        };
		
        dataService.saveUserData(dataObj).then(successPost, errorPost);
        $scope.selection = 'stable';
		console.log(dataObj);
        function successPost(answer) {
          console.log(answer);
        }

        function  errorPost(reason) {
          console.log('Sorry, something went wrong.' + reason)
        }
      };

      function success(answer) {
       console.log(answer.data);
        $scope.userData = answer.data;
        $scope.userData.fullName = $scope.userData.firstName + ' ' + $scope.userData.lastName;
      }
      function  error(reason) {
        console.log('Sorry, something went wrong. The source data is unavailable.' + reason)
      }

    };



})();