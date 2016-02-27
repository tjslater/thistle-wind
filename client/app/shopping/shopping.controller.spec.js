'use strict';

describe('Controller: ShoppingCtrl', function () {

  // load the controller's module
  beforeEach(module('thistleWindApp'));

  var ShoppingCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ShoppingCtrl = $controller('ShoppingCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
