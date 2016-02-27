'use strict';

angular.module('thistleWindApp')
  .directive('trip', function () {
    return {
      templateUrl: 'app/directives/trip/trip.html',
      restrict: 'EA',
      link: function (scope, element, attrs) {
      }
    };
  });
