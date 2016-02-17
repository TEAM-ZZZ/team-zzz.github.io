'use strict';

describe('loginCtrl test', function() {

    var mockScope = {};
    var controller;

    beforeEach(angular.mock.module("stimulApp"));

    beforeEach(angular.mock.inject(function ($controller, $rootScope) {

        mockScope = $rootScope.$new();

        controller = $controller("loginCtrl", {
            $scope: mockScope
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

});
