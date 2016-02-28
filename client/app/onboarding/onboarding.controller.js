'use strict';

angular.module('thistleWindApp')
  .controller('OnboardingCtrl', function ($scope, Onboarding) {
    $scope.choices =  Onboarding.choices;
    $scope.selected = [];

    $scope.select = function (idx) {
      var selection = $scope.choices[idx];
      if ($scope.selected.indexOf(selection) === -1){
        $scope.selected.push(selection);
      } else {
        $scope.selected.slice(idx)
      }

      $scope.choices[idx].selected = !$scope.choices[idx].selected
    }

  });
