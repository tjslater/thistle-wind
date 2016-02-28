'use strict';

angular.module('thistleWindApp')
  .controller('ProfileCtrl', function ($scope, Auth, User, user) {
    $scope.user = user;
  });
