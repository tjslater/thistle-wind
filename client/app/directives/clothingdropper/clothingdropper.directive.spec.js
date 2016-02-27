'use strict';

describe('Directive: clothingdropper', function () {

  // load the directive's module and view
  beforeEach(module('thistleWindApp'));
  beforeEach(module('app/directives/clothingdropper/clothingdropper.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<clothingdropper></clothingdropper>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the clothingdropper directive');
  }));
});
