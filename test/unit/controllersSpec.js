'use strict';

describe('loginCtrl test', function() {

  var mockScope = {};
  var controller;
  var $state;
  var $httpBackend;

  beforeEach(angular.mock.module("stimulApp"));

  beforeEach(angular.mock.inject(function ($controller, $rootScope, _$state_, _$httpBackend_) {

      mockScope = $rootScope.$new();
      $state = _$state_;
      $httpBackend = _$httpBackend_;

      controller = $controller("loginCtrl", {
          $scope: mockScope,
          $state: $state
      });
  }));

  it("Creation initial property of showError status", function () {
      expect(mockScope.showError).toBeFalsy();
  });

  it('should go to personalPage state', function() {
    $httpBackend.when('GET', 'src/app/login/login.html').respond(200);
    $httpBackend.when('GET', 'src/app/topNav/topNav.html').respond(200);
    mockScope.$apply();
    $httpBackend.flush();
    expect($state.current.name).toBe('homePage');

    $httpBackend.when('GET', 'src/app/profile/profile.html').respond(200);
    mockScope.isValid('zzz', 'zzz');
    mockScope.$apply();
    $httpBackend.flush();
    expect($state.current.name).toBe('personalPage');

  });

  it('when the clearForm function runs the form will be empty', function() {
    mockScope.clearForm();
    expect(mockScope.temp).toBe(null);
  });

});


/*describe('topNavCtrl test', function() {

    var mockScope = {};
    var controller;
    var $state;
    var $httpBackend;


    beforeEach(angular.mock.module("stimulApp"));

    beforeEach(angular.mock.inject(function ($controller, $rootScope, _$state_, _$httpBackend_) {

        mockScope = $rootScope.$new();
        $state = _$state_;
        $httpBackend = _$httpBackend_;

        controller = $controller("topNavCtrl", {
            $scope: mockScope,
            $state: $state
        });
    }));

    it("Check, if true, the top navigation is shown", function () {
      $httpBackend.when('GET', 'src/app/login/login.html').respond(200);
      $httpBackend.when('GET', 'src/app/topNav/topNav.html').respond(200);
      mockScope.$apply();
      $httpBackend.flush();
      expect($state.current.name).toBe('homePage');

      expect(mockScope.show()).toBeFalsy();

      $httpBackend.when('GET', 'src/app/profile/profile.html').respond(200);
      $state.go('personalPage', {userProved: true});
      mockScope.$apply();
      $httpBackend.flush();
      expect($state.current.name).toBe('personalPage');

      expect(mockScope.show()).toBeTruthy();
    });

});


describe('profileCtrl test', function() {

    var mockScope = {};
    var controller;
    var $state;
    var $httpBackend;


    beforeEach(angular.mock.module("stimulApp"));

    beforeEach(angular.mock.inject(function ($controller, $rootScope, _$state_, _$httpBackend_) {

        mockScope = $rootScope.$new();
        $state = _$state_;
        $httpBackend = _$httpBackend_;

        controller = $controller("profileCtrl", {
            $scope: mockScope,
            $state: $state
        });
    }));

    it("first state should be stable", function () {
        expect(mockScope.selection).toBe('stable');
    });

    it("should toggle mockScope.selection state of save/edit", function () {
        expect(mockScope.selection).toBe('stable');
        mockScope.profileEdit();
        expect(mockScope.selection).toBe('edit');
    });

});*/