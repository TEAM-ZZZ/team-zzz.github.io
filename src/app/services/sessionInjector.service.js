(function(){
  'use strict';

  angular
    .module('stimulApp')
    .factory('sessionInjector', injectorFunc);

  function injectorFunc($q, $location, authFactory) {
    return {
      request: function(config) {
        config.headers['x-auth'] = authFactory.getAccessToken();
        console.log("config.headers", config.headers);
        return config;
      },
      responseError: function(rejection) {
        console.log('Failed with', rejection.status, 'status');
        if (rejection.status === '403') {
          $location.url('/login');
        }
        return $q.reject(rejection);
      }
    }
  }
})();