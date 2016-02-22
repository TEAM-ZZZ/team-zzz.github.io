(function(){
'use strict';

angular
  .module('stimulApp')
  .controller('messagesCtrl', messagesCtrl);

  function messagesCtrl($scope, $state, $http, httpService) {

    if(httpService.messageData != null) {
      $scope.messageData = httpService.messageData;
    } else {
      httpService.getMessage().then(success, error);
    }

    function success(answer) {
      $scope.messageData = answer.data;
    }
    function error(error) {
      console.log("Something goes wrong", error);
    }

    $('.collapsible').collapsible({accordion : false});
    }
})();