'use strict';

angular.module('thistleWindApp')
  .directive('sidebar', function () {
    return {
      templateUrl: 'components/sidebar/sidebar.html',
      restrict: 'EA',
      link: function (scope, element, attrs) {
      }
    };
  });
