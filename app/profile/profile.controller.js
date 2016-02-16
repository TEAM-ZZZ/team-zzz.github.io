(function(){
  'use strict';

  angular
    .module('stimulApp')
    .controller('profileCtrl', editProfile);

    function editProfile ($scope, $state, dataService){
      var askForPromise = dataService.getPromise();

      $scope.buttonValue = 'Edit';

      $scope.profileEdit = function() {
        $state.go('personalPageEdit', {userProved: 'proved'});
      };

      askForPromise.then(success, errorResponse);

      function success(answer) {
        var dataH = answer.data;
        $scope.dataH = answer.data;
        $scope.photo = dataH.photo;
        $scope.name = dataH.firstName + ' ' + dataH.lastName;
        $scope.age = parseFloat(dataH.age);
        $scope.gender = dataH.gender;
      }
      function  errorResponse(reason) {
        console.log('Sorry, something went wrong. The source data is unavailable.' + reason)
      }
    };

})();