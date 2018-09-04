app.filter('showAsHtml',function($sce){
    return function(input){
        return $sce.trustAsHtml(input);
    }
})
app.controller('ShopController',function($scope,$sce){
    $scope.leftmenuData=result;
    $scope.OSS_DOMAIN = "http://oss.static.nubia.cn/";
    $scope.pageBlock=pageBlock;
    $scope.index="";
    $scope.videourl="";
    $scope.over=function($index,$event){
        $event.stopPropagation();
        // console.log($index);
        $scope.index=$index;
        

    }
    $scope.leave=function($event){
        $event.stopPropagation();
        $scope.index="";

    }
    $scope.getvideourl=function(e,f){
        // $scope.videourl=e;
        console.log(e,f);
    }

    // leftmenuService.getleftmenuData()
    // .then(function(res){
    //     console.log(res)
    // });

})

var result=[];
$.ajax({
    // type: "jsonp",
    url: 'https://www.nubia.com/show/page/shop/leftmenu',
    async: false,
    // dataType:"jsonp",    //跨域json请求一定是jsonp
    // jsonp: "callback",    //跨域请求的参数名，默认是callback
    success: function (ret){
        console.log(ret)
        if (ret.code == 0) {
            result = ret.data.result;
        }
    }
});
// console.log("result",result)
$.ajax({
    url: 'https://www.nubia.com/show/page/shop',
    async: false,
    success: function (ret) {
        pageBlock = ret.data;
    }
});
// console.log('pageBlock',pageBlock)


// {/* <span ng-bind-html="{{item.sub_title.substring(1,item.sub_title.length-1)}}"> */}
// $.ajax({
//     type:"get",    //请求方式
//     async:true,    //是否异步
//     url:"http://www.domain.net/url",
//     dataType:"jsonp",    //跨域json请求一定是jsonp
//     jsonp: "callbackparam",    //跨域请求的参数名，默认是callback
//         //jsonpCallback:"successCallback",    //自定义跨域参数值，回调函数名也是一样，默认为jQuery自动生成的字符串
//     data:{"query":"civilnews"},    //请求参数

//     beforeSend: function() {
//         //请求前的处理
//     },

//     success: function(data) {
//         //请求成功处理，和本地回调完全一样
//     },

//     complete: function() {
//         //请求完成的处理
//     },

//     error: function() {
//         //请求出错处理
//     }
// });