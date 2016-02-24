(function(){
'use strict';

angular
  .module('stimulApp')
  .config(config);

function config($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('root', {
      abstract: true,
      url: '/',
      views: {
        'navbar': {
          templateUrl: 'src/app/navbar/navbar.html',
          controller: 'navbarCtrl'
        },
        'content': {}
      }
    })
    .state('root.login', {
      url: 'login',
      views: {
        'content@': {
          templateUrl: 'src/app/login/login.html',
          controller: 'loginCtrl'
        }
      },
      params: {
        showProfileNav: false
      }
    })
    .state('root.profile', {
      url: 'zzz/profile',
      views: {
        'content@': {
          templateUrl: 'src/app/profile/profile.html',
          controller: 'profileCtrl'
        }
      },
      params: {
        showProfileNav: true
      }
    })
    .state('root.history', {
      url: 'zzz/history',
      views: {
        'content@': {
          templateUrl: 'src/app/history/history.html',
          controller: 'historyCtrl'
        }
      },
      params: {
        showProfileNav: true
      }
    })
    .state('root.messages', {
      url: 'zzz/messages',
      views: {
        'content@': {
          templateUrl: 'src/app/messages/messages.html',
          controller: 'messagesCtrl'
        }
      },
      params: {
        showProfileNav: true
      }
    })
  $urlRouterProvider
    .otherwise('/login');
}

})();
