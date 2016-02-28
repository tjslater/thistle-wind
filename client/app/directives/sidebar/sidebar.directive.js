'use strict';

angular.module('thistleWindApp')
  .directive('sidebar', function () {
    return {
      templateUrl: 'app/directives/sidebar/sidebar.html',
      restrict: 'EA',
      link: function (scope, element, attrs) {
      }
    };
  });
