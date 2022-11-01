var app = angular.module("binding", []);

app.controller("emp",["$scope",function($scope){
       $scope.a = 10;
       $scope.b = 20;             
}]);