'use strict';

angular.module('thistleWindApp')
  .controller('ItineraryCtrl', function ($scope, trip) {
    $scope.trip = trip;
  });
