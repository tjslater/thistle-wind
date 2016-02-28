'use strict';

angular.module('thistleWindApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('itinerary', {
        url: '/itinerary/:id',
        templateUrl: 'app/itinerary/itinerary.html',
        controller: 'ItineraryCtrl',
        authenticate: true,
        resolve: {
          trip: function($http, $stateParams) {
            return $http.get('/api/trips/' + $stateParams.id).then(function(res) {
              return res.data;
            })
          }
        }
      });
  });
