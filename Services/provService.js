// 3) Third way to create service Provider......

var app = angular.module("binding", []);

app.controller("emp",["$scope","calcService",function($scope,calcService){
       $scope.a = 10;
       $scope.b = 20;  
   
       $scope.doSum = function() {
        // $scope.sum = calcService.getSum($scope.a, $scope.b);
       
        calcService.getSum($scope.a, $scope.b, function(result){
            $scope.sum = result;
        }); 
        // this is a asynchronous way dnt required here.....
       };
}]);

app.provider('calcService', function(){
    
    var baseUrl = '';

    this.config = function(url){
       baseUrl = url;
    };

    this.$get = ["$http","$log",function($http,$log){
        $log.log("instantiating calcService....")
        var oCalcService = {};

    //     oCalcService.getSum = function(a,b){
    //      return parseInt(a) + parseInt(b);
    //    };
        
    // oCalcService.getSum = function(a, b, cb){
    //          var s = parseInt(a) + parseInt(b)
    //           cb(s);
    //        }


    oCalcService.getSum = function(a,b,cb){
        $http({
           url: baseUrl + '/Sum?a=' + a + '&b=' + b,
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
       return oCalcService;
    }];
});

// baseUrl to be sent from the config.....
app.config(['calcServiceProvider',function(calcServiceProvider){
    calcServiceProvider.config("http://localhost:4467");
}]);
