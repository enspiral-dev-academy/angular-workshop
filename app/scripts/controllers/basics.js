'use strict';

angular.module('demoApp')
  .controller('BasicsCtrl', function ($scope) {
    $scope.cohorts = [
      {name: 'Fiery Skippers', year: '2013'},
      {name: 'Banana Slugs', year: '2014'},
      {name: 'Golden Bears', year: '2014'}]

    $scope.sortOrder = 'name';


    $scope.createCohort = function() {
      this.cohorts.push({name: this.newCohort.name, year: this.newCohort.year})
    }
  });
