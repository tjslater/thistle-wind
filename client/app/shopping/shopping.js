'use strict';

angular.module('thistleWindApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('shopping', {
        url: '/shopping',
        templateUrl: 'app/shopping/shopping.html',
        controller: 'ShoppingCtrl'
      });
  });
