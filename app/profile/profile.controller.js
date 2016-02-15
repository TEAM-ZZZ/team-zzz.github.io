(function(){
  'use strict';

  angular
    .module('stimulApp')
    .controller('profileCtrl', editProfile);

    function editProfile ($scope, $state, dataService){
      var dataH = dataService.personalData();
      console.log(dataService);
      console.log(dataService.personalData);

      $scope.profile = function() {

    		 $scope.photo = dataH.photo;
    		 $scope.name = dataH.firstName + ' ' + dataH.lastName;
    		 $scope.age = dataH.age;
    		 $scope.gender = dataH.gender;

        console.log("1");
        if ($scope.buttonValue === 'Edit'){
          console.log("2");
          $scope.buttonValue = 'Save';
          $state.go('personalPageEdit', {userProved: true});
        } else if($scope.buttonValue === 'Save') {
            console.log("3");
            $scope.buttonValue = 'Edit';
            $state.go('personalPage', {userProved: true});
        }
      };
    }
})();