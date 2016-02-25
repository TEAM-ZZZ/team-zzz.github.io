(function(){
'use strict';

angular
  .module('stimulApp')
  .controller('messagesCtrl', messagesCtrl);

  function messagesCtrl($scope, httpService) {

    httpService.getMessage().then(success, error);

    function success(responce) {
      $scope.messageData = responce.data;
    }
    function error(error) {
      console.log("Something goes wrong", error);
    }

    $('.collapsible').collapsible({accordion : false});
    }
})();