(function(){
  'use strict';

  angular
    .module('stimulApp')
    .controller('messagesCtrl', messagesCtrl);

    function messagesCtrl ($scope, $state, $http){
      $http.get('src/assets/fakeData/messages.json').then(success, error);
      $scope.messagesData = {};

      function success(answer) {
        $scope.messagesData = answer.data;
        console.log($scope.messagesData);
      }
      function error(error) {
        console.log("Something goes wrong", error);
      }
      $('.collapsible').collapsible({accordion : false});
    }
})();