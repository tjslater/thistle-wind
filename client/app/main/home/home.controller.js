'use strict';

angular.module('thistleWindApp')
  .controller('HomeCtrl', function ($scope, $http, $window) {
    $scope.showModal = false;
    $scope.$on('togglemodal', function(evt, bool) {
      $scope.showModal = bool;
    });



    $scope.hideModal = function(){
      $scope.showModal = false;
    }

    $scope.user = {};
    $scope.errors = {};

    $scope.login = function (form) {
      $scope.submitted = true;

      if(form.$valid) {
        Auth.login({
            email: $scope.user.email,
            password: $scope.user.password
          })
          .then(function () {
            // Logged in, redirect to home
            $location.path('/dash');
          })
          .catch(function (err) {
            $scope.errors.other = err.message;
          });
      }
    };

    $scope.loginOauth = function (provider) {
      $window.location.href = '/auth/' + provider;
    };


  });
