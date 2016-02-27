'use strict';

angular.module('thistleWindApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('itinerary', {
        url: '/itinerary',
        templateUrl: 'app/itinerary/itinerary.html',
        controller: 'ItineraryCtrl'
      });
  });
