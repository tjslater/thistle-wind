'use strict';

angular.module('thistleWindApp')
  .controller('OnboardingCtrl', function ($scope, Onboarding) {
    $scope.choices =  Onboarding.choices;

    $scope.select = function (idx) {
      $scope.choices[idx].selected = !$scope.choices[idx].selected
    }

  });
