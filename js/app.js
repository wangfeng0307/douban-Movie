(function (angular) {
     var app=angular.module("movie",["movie_detail","movie_movielist",'movie.jsonp']);
     app.config(["$locationProvider",function ($locationProvider) {
         $locationProvider.hashPrefix("")
     }]);
     app.controller("searchCtrl",["$scope","$window",function($scope,$window){
                 $scope.query = function(){
           ///v2/movie/search?q={text}
           $window.location.hash = "#/search?q="+$scope.keyWords;
       }
     }])
})(angular)