'use strict';

angular.module('thistleWindApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'HomeCtrl'
      })
  });

