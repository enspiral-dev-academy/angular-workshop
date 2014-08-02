'use strict';

angular.module('demoApp')
  .service('firebaseAuth', ['$rootScope', function($rootScope) {
    var ref = new Firebase("https://dbc-workshop.firebaseio.com");

    //this should really live inside this service instead of being bolted on to rootScope - feel free to improve
    $rootScope.auth = new FirebaseSimpleLogin(ref, function(error, user) {
      if (user) {
        $rootScope.current_user = user
        $rootScope.$emit("login", user);
      }
      else if (error) {
        $rootScope.$emit("loginError", error);
      }
      else {
        $rootScope.current_user = null;
        $rootScope.$emit("logout");
      }
    });
  }]);
