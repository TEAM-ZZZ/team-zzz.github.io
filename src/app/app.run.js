(function(){
  'use strict';

  angular
    .module('stimulApp')
    .run(runFunc);

  function runFunc ($rootScope, $state, $interval, $location, authFactory) {
    $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams, options) {

      if (toState.params.authenticated) {
        var userAuth = authFactory.getAccessToken();
        var now;
        var isExceeded;

        if (!userAuth) {
          console.log("You don't have permission!");
          event.preventDefault();
          $state.go('root.login');
        } else {
          now = new Date().getTime().toString();
          isExceeded = compareTime(userAuth.timestamp, now);

          if (isExceeded) {
            console.log("Sorry, time is gone...");
            event.preventDefault();
            $state.go('root.login');
          }
        }
      }
    });

    function compareTime(date, now) {
      return (parseInt(date, 10) + 1*30*1000 - parseInt(now, 10)) < 0
    }
  }
})();