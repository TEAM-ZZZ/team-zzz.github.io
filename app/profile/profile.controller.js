(function(){
  'use strict';

  angular
    .module('stimulApp')
    .controller('profileCtrl', editProfile);

    function editProfile ($scope, $state, dataService){
      var dataH = dataService.personalData();
      console.log(dataService);
      console.log(dataService.personalData());

     $scope.profile = function() {
       /* console.log(dataH);
    	  $scope.photo = dataH.photo;
      	$scope.name = dataH.firstName + ' ' + dataH.lastName;
    	  $scope.age = dataH.age;
    		$scope.gender = dataH.gender;*/

        $scope.buttonValue = ($scope.buttonValue === 'Edit') ? 'Save' : 'Edit';
      };

      $('.collapsible').collapsible({
        accordion : false
      });

    }
})();