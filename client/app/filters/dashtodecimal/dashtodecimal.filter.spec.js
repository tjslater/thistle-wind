'use strict';

describe('Filter: dashtodecimal', function () {

  // load the filter's module
  beforeEach(module('thistleWindApp'));

  // initialize a new instance of the filter before each test
  var dashtodecimal;
  beforeEach(inject(function ($filter) {
    dashtodecimal = $filter('dashtodecimal');
  }));

  it('should return the input prefixed with "dashtodecimal filter:"', function () {
    var text = 'angularjs';
    expect(dashtodecimal(text)).toBe('dashtodecimal filter: ' + text);
  });

});
