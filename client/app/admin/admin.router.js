'use strict';

angular.module('thistleWindApp.admin')
  .config(function($stateProvider) {
    $stateProvider
      .state('admin', {
        url: '/admin',
        templateUrl: 'app/admin/admin.html',
        controller: 'AdminController',
        controllerAs: 'admin',
        authenticate: 'admin'
      });
  });
