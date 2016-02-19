(function(){
  'use strict';
  angular
    .module('stimulApp')
    .controller('topNavCtrl', topNav);

  function topNav($scope, $state){




    $('.button-collapse').sideNav({
      closeOnClick: true
    });
  }
})();