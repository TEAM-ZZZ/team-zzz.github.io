(function(){
  'use strict';

  angular
    .module('stimulApp')
    .controller('profileEditCtrl', editProfile);

    function editProfile ($scope, $state, dataService){
      var askForPromise = dataService.getPromise();

      $scope.buttonValue = 'Save';

      $scope.profileSave = function() {
        $state.go('personalPage', {userProved: 'proved'});
      };

      askForPromise.then(success, errorResponse);

      function success(answer) {
        console.log(answer.data);
        var dataH = answer.data;
        $scope.dataJ = answer.data;

        $scope.photo = dataH.photo;
        $scope.name = dataH.firstName + ' ' + dataH.lastName;
        $scope.age = parseFloat(dataH.age);
        $scope.gender = dataH.gender;
      }
      function  errorResponse(reason) {
        console.log('Sorry, something went wrong. The source data is unavailable.' + reason)
      }

      $('.collapsible').collapsible({
        accordion : false
      });
    };

})();