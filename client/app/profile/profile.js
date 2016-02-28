'use strict';

angular.module('thistleWindApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('profile', {
        url: '/profile',
        templateUrl: 'app/profile/profile.html',
        controller: 'ProfileCtrl',
        resolve: {
          user: function($http, Auth){
            return Auth.getCurrentUser();
          }
        }
      });
  });
