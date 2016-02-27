'use strict';

angular.module('thistleWindApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('tripdetail', {
        url: '/trip/detail/:id',
        templateUrl: 'app/tripdetail/tripdetail.html',
        controller: 'TripdetailCtrl'
      });
  });
