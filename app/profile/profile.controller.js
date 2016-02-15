(function(){
  'use strict';
  angular
    .module('stimulApp')
    .controller('profileCtrl', editProfile);
    function editProfile ($scope){
      $scope.buttonValue = 'edit';
    }
})();