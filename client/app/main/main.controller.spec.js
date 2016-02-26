'use strict';

<<<<<<< HEAD
describe('Controller: MainController', function() {

  // load the controller's module
  beforeEach(module('thistleWindApp'));
  beforeEach(module('stateMock'));
  beforeEach(module('socketMock'));

  var scope;
  var MainController;
  var state;
  var $httpBackend;

  // Initialize the controller and a mock scope
  beforeEach(inject(function(_$httpBackend_, $controller, $rootScope, $state) {
=======
describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('thistleWindApp'));
  beforeEach(module('socketMock'));

  var MainCtrl,
      scope,
      $httpBackend;

  // Initialize the controller and a mock scope
  beforeEach(inject(function (_$httpBackend_, $controller, $rootScope) {
>>>>>>> 31e58baab6aedbca954ad55e172163092ab52889
    $httpBackend = _$httpBackend_;
    $httpBackend.expectGET('/api/things')
      .respond(['HTML5 Boilerplate', 'AngularJS', 'Karma', 'Express']);

    scope = $rootScope.$new();
<<<<<<< HEAD
    state = $state;
    MainController = $controller('MainController', {
=======
    MainCtrl = $controller('MainCtrl', {
>>>>>>> 31e58baab6aedbca954ad55e172163092ab52889
      $scope: scope
    });
  }));

<<<<<<< HEAD
  it('should attach a list of things to the controller', function() {
    $httpBackend.flush();
    expect(MainController.awesomeThings.length).toBe(4);
=======
  it('should attach a list of things to the scope', function () {
    $httpBackend.flush();
    expect(scope.awesomeThings.length).toBe(4);
>>>>>>> 31e58baab6aedbca954ad55e172163092ab52889
  });
});
