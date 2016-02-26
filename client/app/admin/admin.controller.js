'use strict';

<<<<<<< HEAD
(function() {

class AdminController {
  constructor(User) {
    // Use the User $resource to fetch all users
    this.users = User.query();
  }

  delete(user) {
    user.$remove();
    this.users.splice(this.users.indexOf(user), 1);
  }
}

angular.module('thistleWindApp.admin')
  .controller('AdminController', AdminController);

})();
=======
angular.module('thistleWindApp')
  .controller('AdminCtrl', function ($scope, $http, Auth, User) {

    // Use the User $resource to fetch all users
    $scope.users = User.query();

    $scope.delete = function(user) {
      User.remove({ id: user._id });
      angular.forEach($scope.users, function(u, i) {
        if (u === user) {
          $scope.users.splice(i, 1);
        }
      });
    };
  });
>>>>>>> 31e58baab6aedbca954ad55e172163092ab52889
