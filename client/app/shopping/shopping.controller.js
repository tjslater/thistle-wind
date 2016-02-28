'use strict';

angular.module('thistleWindApp')
  .controller('ShoppingCtrl', function ($scope, clothing) {
    $scope.clothing = clothing;
    console.log(clothing)
  });
