// 2) Second type to create service,,,,,,other two types are Factory and Provide.

var app = angular.module("binding", []);

app.controller("emp",["$scope","calcService",function($scope,calcService){
       $scope.a = 10;
       $scope.b = 20;  
   
       $scope.doSum = function() {
        $scope.sum = calcFactory.getSum($scope.a, $scope.b);
       
        // calcService.getSum($scope.a, $scope.b, function(result){
        //     $scope.sum = result;
        // }); this is a asynchronous way dnt required here.....
       };
}]);

app.service('calcService',['$http','$log', function($http, $log){
    $log.log("instantiating calcService..");

    // this.getSum = function(a,b){
    //     return parseInt(a) + parseInt(b);
    // }
    // Above is simple getting synchronously,,,,
    
    // this.getSum = function(a,b,cb){
    //     var s = parseInt(a) + parseInt(b);
    //     cb(s);
    // }
    // abive is by using callback function...asynchronously,,,,


    // var oCalcService = {};
    // no need to create any object of service like the above line.
    

    this.getSum = function(a,b,cb){
         $http({
            url:'http://localhost:4467/Sum?a=' + a + '&b=' + b,
            method:'GET'
         }).then(function(resp){
            $log.log(resp.data);
            cb(resp.data);
         },
           function(resp){
            $log.error("ERROR occurred");
           }
         )
    };

    // return oCalcService;
    // return not necessary....
}]);