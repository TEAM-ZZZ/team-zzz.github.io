(function(){
  'use strict';
  angular
    .module('stimulApp')
    .controller('topNavCtrl', topNav);

  function topNav ($scope, $state){
           $scope.Show = function(){

         if ( $state.current.url.substr(1, 7) === "profile"){
                return true
         } else {
                return false
             } 
 }
  }
})();