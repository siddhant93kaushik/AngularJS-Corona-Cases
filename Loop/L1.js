var app = angular.module('app', []);

app.controller("emp",['$scope','empService', function($scope, empService){

    $scope.doSearch = function(){
        empService.findEmployeeById($scope.searchEmpno, function(r){
            $scope.confirmed = r.confirmed;
            $scope.recovered = r.recovered;
            $scope.deaths = r.deaths;
            $scope.lastUpdate = r.lastUpdate;
            // $scope.hiredate = r.hiredate;
            // $scope.dob = r.dob;
        });
    }
      
}]);

app.service('empService',["$http","$log", function($http, $log){
     this.findEmployeeById = function(COUNTRY_NAME, cb){
        $http({
            // url: 'http://localhost:4467/api/employee/' + empno,
            // url: 'https://covid19.mathdro.id/api',
            url: 'https://covid19.mathdro.id/api/countries/' + COUNTRY_NAME ,
            method: 'GET'

        }).then(
            function(resp){
               cb(resp.data);
               $log.log("data", resp.data);
            },
            function(resp){
            $log.log("ERROR occurred")
            debugger;
            }
        )
     }
}]);