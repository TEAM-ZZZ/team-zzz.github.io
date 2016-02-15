(function(){
'use strict';

angular
  .module('stimulApp')
  .config(config);

function config($stateProvider) {
  $stateProvider.state('homePage', {url: '/homepage'});
  $stateProvider.state('profile', {url: '/profile/:you_filde'});
}

})();
