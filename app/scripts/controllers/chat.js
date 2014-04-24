'use strict';

angular.module('demoApp')
  .controller('ChatCtrl', function ($scope, $firebase, firebaseAuth, $rootScope) {
    var ref = new Firebase("https://dbc-workshop.firebaseio.com/messages");
    $scope.messages = $firebase(ref)

    $scope.addMessage = function(e) {
      if (e.keyCode != 13) return;
      $scope.messages.$add({from: $rootScope.current_user.displayName, body: $scope.msg});
      $scope.msg = "";
    };

    // listen for user auth events
    $rootScope.$on("login", function(event, user) {
      $scope.$apply()
    })
    $rootScope.$on("logout", function(event) {
      $scope.$apply()
    })
  });
