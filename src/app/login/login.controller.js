(function(){
  'use strict';

  angular
    .module('stimulApp')
    .controller('loginCtrl', checkLogin);

  function checkLogin ($scope, $state, $timeout, $http, authFactory) {
    $scope.showError = false;

    $scope.isValid = function(login, password) {
     $http.get([
          'http://fathomless-everglades-3680.herokuapp.com/api/login',
          '?password=',
          password,
          '&login=',
          login
        ].join(''))
          .then(loginSuccess, loginError);

      //temporary for fake request
      /*$http.get([
        'src/assets/fakeData/auth.json',
        '?password=',
        password,
        '&login=',
        login
      ].join(''))
        .then(loginSuccess, loginError);*/

      $('.preloader-wrapper.big').toggleClass('active');
      $('.login-form input, .login-form button').attr('disabled', true);

      function loginSuccess(response) {
        //temporary check for fake request
        /*if ((login !== "admin") || (password !== "123")) {
          loginError("wrong login or password");
          return false;
        }*/

        if (response.data.success) {
          $('.preloader-wrapper.big').toggleClass('active');
          $('.login-form input, .login-form button').removeAttr('disabled');
          $('#loginWindow').closeModal();
          $('.lean-overlay').remove();

          authFactory.setAccessToken(response.data.token);
          $state.go('root.profile');
        } else {
          $('.preloader-wrapper.big').toggleClass('active');
          $('.login-form input, .login-form button').removeAttr('disabled');

          console.log("wrong login or password");
          $scope.showError = 'true';
        }

      }
      function loginError(response) {
        $('.preloader-wrapper.big').toggleClass('active');
        $('.login-form input, .login-form button').removeAttr('disabled');

        console.log(response);
        $scope.showError = 'true';
      }
    };

    $scope.clearForm = function() {
      $scope.temp = null;
      $scope.userForm.$setUntouched();
      $scope.userForm.$setPristine();
    }

    $('.modal-trigger').leanModal();
  }
})();