(function (angular) {
    var app=angular.module("movie_movielist",["ngRoute","movie.jsonp"]);
    app.config(["$routeProvider",function($routeProvider){
        $routeProvider.when("/:type/:page?",{
            templateUrl:"movelist/movelist.html",
            controller:"movielistctrl"
        })
    }])
    app.controller("movielistctrl",["$scope","$window","jsonp","$routeParams","$route",function($scope,$window,jsonp,$routeParams,$route){
          $scope.isPrev=true;
          $scope.isNext=true;
          $scope.isLoadingShow=true;
          $scope.pageIndex=($routeParams.page || "1")-0;        
          $scope.pageSize=10;
          $scope.statrcount=($scope.pageIndex-1)*$scope.count;
          jsonp.jsonp({
              url:"http://api.douban.com/v2/movie/"+$routeParams.type,
              params:{
                  count:$scope.pageSize,
                  start:$scope.statrcount,
                  q:$routeParams.q   
              },
              callback:function(data){
                //   console.log(data)
                  $scope.movieData=data;
                  $scope.pageCount=$window.Math.ceil((data.total/$scope.pageSize));
                  $scope.isLoadingShow=false;
                  $scope.checkButton();
                  $scope.$apply();
              }

          });
            $scope.getPage = function(pageIndex){
            //2  $route.updateParams({ page: pageIndex });
            //先判断页码是否合法.
            //10  1  10  0  5
            //>0 && <= 总页码
            if(pageIndex < 1 || pageIndex > $scope.pageCount) return;
            
            $route.updateParams({
                page:pageIndex
            });
        };
           $scope.checkButton=function () {
             if($scope.pageIndex==1){
                 $scope.isPrev=true;
                 $scope.isNext=false;
             }else if($scope.pageIndex==$scope.pageCount){
                 $scope.isPrev=false;
                 $scope.isNext=true;
             }else{
                 $scope.isPrev=false;
                 $scope.isNext=false;
             }
         }
    }])
})(angular)