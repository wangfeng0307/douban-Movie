(function (angular) {
         var app=angular.module("movie.jsonp",[]);
         app.service("jsonp",["$window",function ($window) {
             this.jsonp=function (opts) {
                 var url=opts.url+"?";
                 for(var key in opts.params){
                     url+=(key+"="+opts.params[key]+"&");
                 }
                 //防止回调函数名重复
                var callbackname='jsonp_'+$window.Math.random().toString().slice(2);
                 $window[callbackname]=opts.callback;
                 url+=("callback="+callbackname);
                 var script=document.createElement("script");
                 script.src=url;
                 $window.document.body.appendChild(script);
             }
         }]);
        app.directive("hmActive",[function(){
         return {
             restrict:"A",
             link:function(scope,elemnt,attrs){
                 elemnt.on("click",function(){
                     elemnt.parent().children().removeClass("active");
                     elemnt.addClass("active");
                 });
             }
         };
     }]);
         
})(angular)