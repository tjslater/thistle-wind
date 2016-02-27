'use strict';

angular.module('thistleWindApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('trip', {
        url: '/trip',
        templateUrl: 'app/trip/trip.html',
        controller: 'TripCtrl'
      }).
      state('trip.detail', {
      url: '/:id',
      views: {
        'detail': {
          templateUrl: 'app/trip/tripdetail/tripdetail.html',
          controller: 'TripdetailCtrl'
        }
      }
    })
  });
