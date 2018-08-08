///<reference path=angular.js>

var app = angular
    .module('myModule', [])

    .controller('myController', function ($scope) {
        var Employees = [{
                name: 'John',
                dateOfBirth: new Date('November 13, 1990'),
                gender: 1,
                salary: 60000
            },
            {
                name: 'Mike',
                dateOfBirth: new Date('September 23, 1990'),
                gender: 1,
                salary: 60000
            },
            {
                name: 'Ryu',
                dateOfBirth: new Date('December 12, 1990'),
                gender: 2,
                salary: 60000
            }
        ];
        $scope.Employees = Employees;
        $scope.rowLimit = 3;
    })