'use strict';

angular.module('thistleWindApp')
  .controller('DashCtrl', function ($scope, User, trips) {
    trips.map(function(trip, idx) {
      idx === 1 ? trip.active = true: trip.active = false;
    });
    $scope.trips = trips;



  });
