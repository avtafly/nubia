app.config(['$routeProvider',function($routeProvider){
        $routeProvider
        .when('/home',{templateUrl:'page/home.html'})
        .when('/shop',{templateUrl:'page/shop.html'})
        .when('/user',{templateUrl:'page/user.html'})
        .when('/redmagicmobile',{templateUrl:'page/redmagic-secion/redmagicmobile.html'})
        .when('/redmagicmobile.html',{templateUrl:'page/redmagic-secion/redmagicmobile.html'})
        .when('/redmagicmobile&params',{templateUrl:'page/redmagic-secion/redmagic-secion-1.1.html'})
        .when('/redmagicmobile&show',{templateUrl:'page/redmagic-secion/redmagic-secion-1.2.html'})
        .otherwise({redirectTo: '/home'});
    }
])
// app1.config(['$routeProvider',function($routeProvider){
//     $routeProvider
//     .when('/redmagicmobile/one',{templateUrl:'page/redmagicmobile/redmagic-secion-1.html'})
// }
// ])

//3 配置路由模块，使其正常工作
// App.config(['$routeProvider', function ($routeProvider) {
 
//     $routeProvider.when('/index', {
//         // template: '<h1>index Pages!</h1>',
//         templateUrl: './abc.html'
//     })
//     .when('/introduce', {
//         template: '<h1>introduce Pages!</h1>'
//     })
//     .when('/contact', {
//         // template: '<h1>contact US Pages!</h1>',
//         templateUrl: './contact.html',
//         controller: 'ContactController' // 定义控制器
//     })
//     .when('/list', {
//         templateUrl: './list.html', // 视图模板
//         controller: 'ListController' // 定义控制器
//     })
//     .otherwise({
//         redirectTo: '/index'
//     });

// }])