'use strict';

describe('Service: usercache', function () {

  // load the service's module
  beforeEach(module('thistleWindApp'));

  // instantiate service
  var usercache;
  beforeEach(inject(function (_usercache_) {
    usercache = _usercache_;
  }));

  it('should do something', function () {
    expect(!!usercache).toBe(true);
  });

});
