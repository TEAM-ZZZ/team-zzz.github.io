(function(){
  'use strict';

  angular
    .module('stimulApp')
    .controller('profileEditCtrl', editProfile);

    function editProfile ($scope, $state, dataService, $http){
      var askForPromise = dataService.getUserData();

      $scope.profileSave = function() {
        $scope.userData.firstName = ($scope.fullName).substr(0, ($scope.fullName).indexOf(' '));

        var dataObj = {
          avatar: $scope.userData.avatar,
          firstName: ($scope.fullName.split(' '))[0],
          lastName: ($scope.fullName.split(' '))[1],
          age: $scope.userData.age,
          gender: $scope.userData.gender
        };
		
       dataService.saveUserData(dataObj).then(success, error);
	   
       
	  function success(answer) {
        console.log(answer);
      }
	  
      function  error(reason) {
        console.log('Sorry, something went wrong.' + reason)
      }
      };

      askForPromise.then(success, errorResponse);

      function success(answer) {
        console.log(answer.data);
        $scope.userData = answer.data;
        $scope.fullName = $scope.userData.firstName + ' ' + $scope.userData.lastName;
      }
      function  errorResponse(reason) {
        console.log('Sorry, something went wrong. The source data is unavailable.' + reason)
      }

      $('.collapsible').collapsible({
        accordion : false
      });
    };

})();