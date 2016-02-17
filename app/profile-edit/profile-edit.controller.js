(function(){
  'use strict';

  angular
    .module('stimulApp')
    .controller('profileEditCtrl', editProfile);

    function editProfile ($scope, $state, dataService, $http){
      var askForPromise = dataService.getPromise();

      $scope.profileSave = function() {
        $scope.userData.firstName = ($scope.fullName).substr(0, ($scope.fullName).indexOf(' '));

        var dataObj = {
          avatar: $scope.userData.avatar,
          firstName: ($scope.fullName.split(' '))[0],
          lastName: ($scope.fullName.split(' '))[1],
          age: $scope.userData.age,
          gender: $scope.userData.gender
        };
        console.log(dataObj);
        var userPromise = $http.post('http://fathomless-everglades-3680.herokuapp.com/api/user/3', dataObj);

        console.log("Sent");
        $state.go('personalPage', {userProved: true});
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