'use strict';

angular.module('demoApp')
  .controller('BasicsCtrl', ['$scope', '$http', function ($scope, $http) {
    $scope.init = function() {
      this.cohorts = []
      this.sortOrder = 'name';
      this.loadCohorts();
    }

    $scope.loadCohorts = function() {
      $http.get('https://dbc-workshop.firebaseio.com/cohorts.json')
        .success(function(data) {
          $scope.cohorts = data;
        })
    }

    $scope.createCohort = function() {
      //this.cohorts.push({name: this.newCohort.name, year: this.newCohort.year})
      $http.post('https://dbc-workshop.firebaseio.com/cohorts.json',
        {
          name: this.newCohort.name,
          year: this.newCohort.year
        }).success(function() {
          $scope.loadCohorts();
        });
    }
    $scope.init();
  }]);
