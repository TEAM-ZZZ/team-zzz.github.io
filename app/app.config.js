(function(){
'use strict';

angular
  .module('stimulApp')
  .config(config);

function config($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('homePage', {
      url: '/home',
      templateUrl: 'app/login/login.html',
      controller: 'loginCtrl'
    })
    .state('personalPage', {
      url: '/profile',
      templateUrl: 'app/profile/profile.html',
      controller: 'profileCtrl'
    });
  $urlRouterProvider
    .otherwise('/home');
}

})();
