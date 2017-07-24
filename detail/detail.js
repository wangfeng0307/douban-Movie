(function (angular) {
      var app=angular.module("movie_detail",["ngRoute","movie.jsonp"]);
      app.config(["$routeProvider",function($routeProvider){
           $routeProvider.when("/details/:id",{
               templateUrl:"detail/detail.html",
               controller:"detailctrl"
           });
           }])
           app.controller("detailctrl",["$scope","jsonp","$routeParams",function($scope,jsonp,$routeParams){
                 $scope.isShow=true;
                 
                 jsonp.jsonp({
                     url:"http://api.douban.com/v2/movie/subject/"+$routeParams.id,
                     params:{
                     },
                     callback:function (data) {
                         $scope.movie=data;
                         $scope.isShow=false;
                         $scope.$apply(); 
                     }
                 })
      }])
})(angular)