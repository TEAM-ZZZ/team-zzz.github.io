'use strict';

/* jasmine specs for controllers go here */

describe('loginCtrl', function() {

  beforeEach(module('stimulApp'));

  describe('$scope.showLogin', function() {
    it('if showLogin runs it should show login box and hide button', function() {
      var $scope = {};
      var controller = $controller('loginCtrl', { $scope: $scope });
      $scope.showLogin();
      expect($scope.isLogin).toEqual(true);
      expect($scope.hideBtn).toEqual(true);
    });
  });
});
