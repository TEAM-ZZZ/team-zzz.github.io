var stim = angular.module ( 'stimulApp', ['ui.router'] );

  //Для красивенькой ссылочки
  stim.config(['$stateProvider', function($stateProvider){
	$stateProvider.state('homePage', {url: '/homepage'});
	$stateProvider.state('profile', {url: '/profile/:you_filde'});
  }]);

  //Для выбора пола
  stim.controller ( 'selectCtrl', function ($scope) {
    $scope.tasks = [
      {gender: "Female" },
      {gender: "Male" }
    ];
  })
  
  //Для отображения о том, что инфа сохранена
  //А также для переключения между окнами
  stim.controller ( 'buttonCtrl', function ($scope, $state, $rootScope ) {
    $scope.clickBtn = function (){
      $scope.text = " Profile Saved";
    }
	$scope.changeWindow = function () {
	  $rootScope.state = $state;
	  if ($scope.homepage == true) {
	    $rootScope.state.go ('profile', {location: 'replace', notify: false});
		$scope.confirmed = "";
		$scope.age = "";
		$scope.selectValue = "";
	  }
	  else $rootScope.state.go('homePage', {location: 'replace', notify: false});
	  $scope.profile = !$scope.profile;
	  $scope.homepage = !$scope.homepage;
	}
	
	$scope.homepage = true;
	$scope.profile = false;
	
	$scope.url = function (){
	  $rootScope.state = $state;
	  $rootScope.state.go('profile', {you_filde: $scope.confirmed}, {location: 'replace', notify: false})
    }
  })
  
  //Для отображения сообщения о неправильном вводе данных
  stim.controller ( 'mainCtrl', function($scope) {
    $scope.error = "";
    $scope.safeApply = function ( elem ) {
	  var phase = this.$root.$$phase;
	  if(phase == '$apply' || phase == '$digest') {
		if ( elem ) {
		   elem () ;
		}
	  } 
	  else {
        this.$apply ( elem ) ;
	  }
    };
  });
 
    function change ( check ) {
      var scope = angular.element ( document.getElementById("wrap")).scope () ;
      scope.safeApply (function() {
        if (check == false) {scope.error = "Please enter a valid name!";} 
		else {scope.error = "";}
      })
    }
	
	
