# douban-Movie
##采用angular实现豆瓣电影单页应用
**用angular.js完成了豆瓣电影实时更新单页面应用，包含了豆瓣电影的正在热映，即将上映，top250，搜索功能**
______
主要使用了angular的路由技术根据hash值不同实现单页跳转，配合angualr的一些指令实现对页面的控制，包括模板页的渲染，上下页按钮的控制及状态栏的切换       
由于豆瓣API接口不允许JSONP回调函数名有小数点存在，而angular内置的JSONP回调函数名有小数点，故自己封装了一个angular的JSONP服务，来实现功能         
