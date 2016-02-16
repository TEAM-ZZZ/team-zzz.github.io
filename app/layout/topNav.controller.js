(function(){
  'use strict';
  angular
    .module('stimulApp')
    .controller('topNavCtrl', topNav);

		function topNav ($scope, $state){
			$scope.isNav = true;
			if ($state.current.url.substr(1, 7) === "profile")
			{$scope.isNav = false;}
		}
})();