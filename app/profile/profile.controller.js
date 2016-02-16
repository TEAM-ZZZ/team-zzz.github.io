(function(){
  'use strict';

  angular
    .module('stimulApp')
    .controller('profileCtrl', editProfile);

    function editProfile ($scope, $state, dataService){
      var askForPromise = dataService.getPromise();
      askForPromise.then(

        function(answer) {
		  var dataH = answer.data
          $scope.photo = dataH.photo;
      	  $scope.name = dataH.firstName + ' ' + dataH.lastName;
    	  $scope.age = parseFloat(dataH.age);
    	  $scope.gender = dataH.gender;
        },
        
        function(reason) {
          console.log('Sorry, something went wrong. The source data is unavailable.' + reason)
        }
      )
   
     $scope.profile = function() {
        $scope.buttonValue = ($scope.buttonValue === 'Edit') ? 'Save' : 'Edit';
      };

      $('.collapsible').collapsible({
        accordion : false
      });
 };
    }
)();