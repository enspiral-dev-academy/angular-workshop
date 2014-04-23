'use strict';

describe('Controller: BasicsCtrl', function () {

  // load the controller's module
  beforeEach(module('demoApp'));

  var BasicsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BasicsCtrl = $controller('BasicsCtrl', {
      $scope: scope
    });
  }));
  it('has a list of cohorts', function () {
    expect(scope.cohorts.length).toBe(3);
  });
});
