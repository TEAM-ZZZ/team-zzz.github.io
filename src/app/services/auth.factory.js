(function(){
  'use strict';

  angular
    .module('stimulApp')
    .factory('authFactory', authFunc);

  function authFunc (localStorageService, $timeout) {
    var authFactory = {};

    authFactory.setAccessToken = function(accessToken) {
      localStorageService.set('data', {
        'token': accessToken,
        'timestamp': new Date().getTime()
      });
    };

    authFactory.getAccessToken = function() {
      return localStorageService.get('data');
    };

    return authFactory;
  }
})();