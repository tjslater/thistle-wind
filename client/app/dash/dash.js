'use strict';

angular.module('thistleWindApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('dash', {
        url: '/dash',
        templateUrl: 'app/dash/dash.html',
        controller: 'DashCtrl',
        authenticate: true
      });
  });
