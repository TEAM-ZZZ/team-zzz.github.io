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
        'topNav': {
          templateUrl: 'src/app/topNav/topNav.html',
          controller: 'topNavCtrl'
        },
        'content': {
          templateUrl: 'src/app/login/login.html',
          controller: 'loginCtrl'
        }
      },
      params: {
        showLoginNav: true
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
      },
      params: {
        showProfileNav: true
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
      },
      params: {
        showProfileNav: true
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
      },
      params: {
        showProfileNav: true
      }
    })
  $urlRouterProvider
    .otherwise('/home');
}

})();
