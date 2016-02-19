(function(){
'use strict';

angular
  .module('stimulApp')
  .config(config);

function config($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('homePage', {
      url: '/home',
      views: {
        'topNav': {},
        'content': {
          templateUrl: 'src/app/login/login.html',
          controller: 'loginCtrl'
        }
      }
    })
    .state('personalPage', {
      url: '/zzz/profile',
      views: {
        'topNav': {
          templateUrl: 'src/app/topNav/topNav.html',
          controller: 'topNavCtrl'
        },
        'content': {
          templateUrl: 'src/app/profile/profile.html',
          controller: 'profileCtrl'
        }
      }
    })
    .state('history', {
      url: '/zzz/history',
      views: {
        'topNav': {
          templateUrl: 'src/app/topNav/topNav.html',
          controller: 'topNavCtrl'
        },
        'content': {
          templateUrl: 'src/app/history/history.html',
          controller: 'historyCtrl'
        }
      }
    })
    .state('messages', {
      url: '/zzz/messages',
      views: {
        'topNav': {
          templateUrl: 'src/app/topNav/topNav.html',
          controller: 'topNavCtrl'
        },
        'content': {
          templateUrl: 'src/app/messages/messages.html',
          controller: 'messagesCtrl'
        }
      }
    })
  $urlRouterProvider
    .otherwise('/home');
}

})();
