'use strict';

angular.module('thistleWindApp')
  .filter('dashtodecimal', function () {
    return function (input) {
      return input.replace(/-/g, '.');
    };
  });
