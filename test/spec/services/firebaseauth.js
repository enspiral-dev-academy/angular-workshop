'use strict';

describe('Service: Firebaseauth', function () {

  // load the service's module
  beforeEach(module('demoApp'));

  // instantiate service
  var firebaseAuth;
  beforeEach(inject(function (_firebaseAuth_) {
    firebaseAuth = _firebaseAuth_;
  }));

  it('should do something', function () {
    expect(!!firebaseAuth).toBe(true);
  });

});
