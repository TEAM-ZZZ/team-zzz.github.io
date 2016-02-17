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

    it("Creation initial property of login status", function () {
        expect(mockScope.isLogin).toBeFalsy();
    });

    it("When we click on button Log in, the login window should appear, and button should dissappear", function () {
        mockScope.showLogin();

        expect(mockScope.isLogin).toBeTruthy();
        expect(mockScope.hideBtn).toBeTruthy();
    });

    it("When we click on out of Log in window, the login window should disappear, and button should appear", function () {
        mockScope.hideLogin();

        expect(mockScope.isLogin).toBeFalsy();
        expect(mockScope.hideBtn).toBeFalsy();
    });

    it('should transition to personalPage state', function() {
      $httpBackend.when('GET', 'app/login/login.html').respond(200);
      mockScope.$apply();
      $httpBackend.flush();
      expect($state.current.name).toBe('homePage');

      $httpBackend.when('GET', 'app/profile/profile.html').respond(200);
      mockScope.isValid('zzz', 'zzz');
      mockScope.$apply();
      $httpBackend.flush();
      expect($state.current.name).toBe('personalPage');

    });

});

describe('topNavCtrl test', function() {

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
      $httpBackend.when('GET', 'app/login/login.html').respond(200);
      $httpBackend.when('GET', 'app/layout/topNav.html').respond(200);
      mockScope.$apply();
      $httpBackend.flush();
      expect($state.current.name).toBe('homePage');

      expect(mockScope.show()).toBeFalsy();

      $httpBackend.when('GET', 'app/profile/profile.html').respond(200);
      $state.go('personalPage', {userProved: 'proved'});
      mockScope.$apply();
      $httpBackend.flush();
      expect($state.current.name).toBe('personalPage');

      expect(mockScope.show()).toBeTruthy();

      $httpBackend.when('GET', 'app/profile-edit/profile-edit.html').respond(200);
      $state.go('personalPageEdit', {userProved: 'proved'});
      mockScope.$apply();
      $httpBackend.flush();
      expect($state.current.name).toBe('personalPageEdit');

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

    it("", function () {

    });

});