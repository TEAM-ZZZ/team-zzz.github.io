(function(){
  'use strict';

  angular
    .module('stimulApp')
    .controller('profileCtrl', editProfile);

    function editProfile ($scope, $state, dataService){
      var askForPromise = dataService.getPromise();

      $scope.profileEdit = function() {
        $state.go('personalPageEdit', {userProved: true});
      };

      askForPromise.then(success, errorResponse);

      function success(answer) {
       console.log(answer.data);
        $scope.userData = answer.data;
      }
      function  errorResponse(reason) {
        console.log('Sorry, something went wrong. The source data is unavailable.' + reason)
      }
    };

})();