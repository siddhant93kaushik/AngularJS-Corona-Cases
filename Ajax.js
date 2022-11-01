var app = angular.module("binding", []);

app.controller("emp",["$scope","$http","$log",function($scope, $http, $log){
       $scope.a = 10;
       $scope.b = 20;  
   
       $scope.doSum = function() {
        //   $scope.sum = parseInt($scope.a) + parseInt($scope.b);
        $http({
            url:'http://localhost:4467/Sum?a=' + $scope.a + '&b=' + $scope.b,
            method:'GET'
           
        }).then(
            function(resp){
            // success function
            $log.log(resp.data)
            // $log. ->used in place of console.log.. 
            $scope.sum = resp.data;

            },function(resp){
            // failure function
            $log.error("ERROR occurred");
            });
       };
}]);

// http method api call...in above.