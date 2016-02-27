'use strict';

angular.module('thistleWindApp')
  .directive('login', function () {
    return {
      templateUrl: 'app/directives/login/login.html',
      restrict: 'EA',
      link: function (scope, element, attrs) {
      }
    };
  });
