'use strict';

/**
 * Removes server error when user updates input
 */
angular.module('thistleWindApp')
<<<<<<< HEAD
  .directive('mongooseError', function() {
=======
  .directive('mongooseError', function () {
>>>>>>> 31e58baab6aedbca954ad55e172163092ab52889
    return {
      restrict: 'A',
      require: 'ngModel',
      link: function(scope, element, attrs, ngModel) {
<<<<<<< HEAD
        element.on('keydown', () => ngModel.$setValidity('mongoose', true));
      }
    };
  });
=======
        element.on('keydown', function() {
          return ngModel.$setValidity('mongoose', true);
        });
      }
    };
  });
>>>>>>> 31e58baab6aedbca954ad55e172163092ab52889
