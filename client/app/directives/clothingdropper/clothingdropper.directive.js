'use strict';

angular.module('thistleWindApp')
  .directive('clothingdropper', function () {
    return {
      templateUrl: 'app/directives/clothingdropper/clothingdropper.html',
      restrict: 'EA',
      link: function (scope, element, attrs) {
      }
    };
  });
