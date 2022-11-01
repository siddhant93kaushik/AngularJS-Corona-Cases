//1)...........Service through Factory.......................................
//var app = angular.module("binding", []);

//app.controller("emp",["$scope","calcFactory",function($scope,calcFactory){
    //   $scope.a = 10;
  //     $scope.b = 20;  
   
      // $scope.doSum = function() {
      // $scope.sum = calcFactory.getSum($scope.a, $scope.b);
      //calcFactory.getSum($scope.a, $scope.b, function(result){
      //  $scope.sum = result;
      //  });
       //};
//}]);

//app.factory('calcFactory',['$http','$log', function($http, $log){
  //  $log.log("instantiating calcFactory..");
    //var oCalcService = {};
    // above service object is getting created..

    // below adding all the members to the service object..
   // oCalcService.getSum = function(a,b){
  //    return parseInt(a) + parseInt(b);
 //};

 // using a callback function(cb)....in a asynchronous way..
  //    oCalcService.getSum = function(a, b, cb){
  //      var s = parseInt(a) + parseInt(b)
  //       cb(s);
  //    }

//    return oCalcService;
//}]);

// Services example....
//...........................................................................

//2).....Using Service....
var app = angular.module("binding", []);

app.controller("emp",["$scope","calcFactory",function($scope,calcFactory){
       $scope.a = 10;
       $scope.b = 20;  
   
       $scope.doSum = function() {
        // $scope.sum = calcFactory.getSum($scope.a, $scope.b);
        calcFactory.getSum($scope.a, $scope.b, function(result){
            $scope.sum = result;
        });
       };
}]);

app.factory('calcFactory',['$http','$log', function($http, $log){
    $log.log("instantiating calcFactory..");
    var oCalcService = {};
    

 // using a callback function(cb)....in a asynchronous way..
    //  oCalcService.getSum = function(a, b, cb){
    //  var s = parseInt(a) + parseInt(b)
    // cb(s);
    //}

    oCalcService.getSum = function(a,b,cb){
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
    return oCalcService;
}]);


