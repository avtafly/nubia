
var leftmenuData = function($http) {
    this.getleftmenuData = function() {
        return $http({ method: 'GET', url: 'https://www.nubia.com/show/page/shop/leftmenu?callback=JSON_CALLBACK',header:'Content-type: application/json'});
     };
};
app.service('leftmenuService', leftmenuData);
// var leftmenuData = function() {$.ajax({
//     url: 'https://www.nubia.com/show/page/shop/leftmenu',
//     async: false,
//     success: function (ret){
//         console.log(ret)
//         retrun 
//     }
// })}





// callback=angular.callbacks._0
