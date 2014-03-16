'use strict';

describe('Service: Talks', function () {

  // load the service's module
  beforeEach(module('tryitApp'));

  // instantiate service
  var Talks;
  beforeEach(inject(function (_Talks_) {
    Talks = _Talks_;
  }));

  it('should have talks', function () {
    expect(Talks.query).toBeDefined();
    expect(Talks.query().length > 0).toBe(true);
  });

});
