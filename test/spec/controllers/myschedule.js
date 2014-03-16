'use strict';

describe('Controller: MyScheduleCtrl', function () {

  // load the controller's module
  beforeEach(module('tryitApp'));

  var MyScheduleCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MyScheduleCtrl = $controller('MyScheduleCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of favorites', function () {
    expect(scope.talks).toBeDefined();
  });
});
