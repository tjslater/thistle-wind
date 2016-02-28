'use strict';

angular.module('thistleWindApp')
  .directive('sidebar', function () {
    return {
      scope: {
        dash: '=',
        profile: '=',
        shopping: '='
      },
      templateUrl: 'app/directives/sidebar/sidebar.html',
      restrict: 'EA',
      link: function (scope, element, attrs) {

      }
    };
  });
