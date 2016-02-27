'use strict';

describe('Controller: TripCtrl', function () {

  // load the controller's module
  beforeEach(module('thistleWindApp'));

  var TripCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TripCtrl = $controller('TripCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
