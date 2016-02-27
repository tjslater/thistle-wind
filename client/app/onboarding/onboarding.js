'use strict';

angular.module('thistleWindApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('onboarding', {
        url: '/onboarding',
        templateUrl: 'app/onboarding/onboarding.html',
        controller: 'OnboardingCtrl'
      });
  });
