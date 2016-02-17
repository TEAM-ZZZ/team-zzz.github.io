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
      url: '/profile/zzz',
      templateUrl: 'app/profile/profile.html',
      controller: 'profileCtrl',
      params: {
        userProved: false
      }
    })
    .state('personalPageEdit', {
      url: '/profile/zzz/edit',
      templateUrl: 'app/profile-edit/profile-edit.html',
      controller: 'profileEditCtrl',
      params: {
        userProved: false
      }
    })
  $urlRouterProvider
    .otherwise('/home');
}

})();
