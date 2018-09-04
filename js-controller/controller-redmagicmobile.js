var log = [];

app.controller('redmagicmobile', function ($scope) {
    // $scope.leftmenuData=result;

    // $scope.over=function($index,$event){
    //     $event.stopPropagation();                        //阻止气泡
    //     // console.log($index);
    //     $scope.index=$index;
    // }
    $scope.scrollfixed = { "top": "0px", "position": "fixed" };
    $scope.mouseoverone = {};
    $scope.mouseovertwo = [];
    $scope.mouseoverthree = [];

    $scope.mouseover_one = function ($event) {
        $event.stopPropagation();
        $scope.mouseoverone = { "top": "0px", "opacity": 1 };
        // console.log($scope.mouseoverone);
    }
    $scope.mouseover_two = function () {
        $scope.mouseovertwo[1] = { "top": "0px", "opacity": 1 };   //增加列表字典个数： $scope.mouseovertwo = [];
        $scope.mouseovertwo[2] = { "top": "0px", "opacity": 1 };
        $scope.mouseovertwo[3] = { "width": "70%", "opacity": 1 };
        $scope.mouseovertwo[4] = { "bottom": "-480px", "opacity": 1 };
    }
    $scope.mouseover_three = function () {
        $scope.mouseoverthree = $scope.mouseovertwo;
    }

    // $scope.clickload=function(){
    //     // $windows.location.href="file:///Users/apple1/Desktop/ng-nubia/index.html#/redmagicmobile-params"
    //     window.location.reload();
    // }

    //点击父集获取iframe中元素

    // $scope.change= function () {
    //     var a = window.frames["myframe"].document.getElementById("iframecontent"); //父集获取iframe中元素
    //     $("#iframecontent").css({ "display": "none" });
    //     console.log(a);
    //     if (a != null) {
    //         $(".redmagicmobile").children().get(1).replaceWith(a); //替换某元素
    //         $("iframe").css({ "display": "none" });
    //     }
    // }



})
$(function () {
    // window.location.reload()
    //根据当前url地址设置点击跳转标签背景选中颜色：以下设置似乎不太靠谱
    // var searchStr = location.hash.split("-")[1];//获取当前页面url地址-后面字符串
    // var case1 = $(".heard-right ul").children()
    // console.log(searchStr)
    // console.log($(".heard-right ul").children().get(1))
    //方法一（）
    // switch (searchStr) {
    //     case "params":
    //         case1.eq(1).css("border-bottom", "2px solid #e53a1f");
    //         break;
    //     case null:
    //         case1.eq(0).css("border-bottom", "2px solid #e53a1f");
    //         break;

    // }

    //方法二（）
        // window.location.reload();

    // $("heard-left").click(function(){
        // window.location.href
        // window.location.reload();
        
    document.addEventListener('click',function(e){
        console.log(e)
        
        var searchStr = location.hash.split("&")[1];//获取当前页面url地址-后面字符串
        var case1 = $(".heard-right ul").children()
        if (searchStr == "params" && e.target.innerText== "技术规格") {
            window.location.reload();
            
            case1.eq(1).css("border-bottom", "2px solid #e53a1f");

            // window.location.href="file:///Users/apple1/Desktop/ng-nubia/index.html#/redmagicmobile-params";
            // break;
        } else if (searchStr == null) {
            case1.eq(0).css("border-bottom", "2px solid #e53a1f");
            
        } else if (searchStr == "show") {
            case1.eq(2).css("border-bottom", "2px solid #e53a1f");
        }
    })


    //设置顶部导航栏位置固定设置
    document.addEventListener('scroll', function (event) {
        var scrollDistance = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
        if (scrollDistance >= 65) {    // 触发的位置
            $(".heard").addClass("scrollfixed");
        } else {
            $(".heard").removeClass("scrollfixed");
        }
    })
    $(window).on("scroll", function () {          //滚动事件元素位置设置

        // console.log($(window).scrollTop())          //窗口滚动条位置

        if ($(window).scrollTop() > 300) {
            $(".sidebar").css("top", "100px")
        }
        if ($(window).scrollTop() < 300) {
            $(".sidebar").removeAttr("style")
        }
        if ($(window).scrollTop() > 4500) {
            $(".sidebar").css("top", "5000px")
        }
        if (n=parseInt($(window).scrollTop()/a_width)) {
            $(".sidebar li").eq(n).addClass("current").siblings().removeClass("current");
        }
        
    })
    // 点击锚点平滑跳转到某元素内容设置
    // 方法一（）改变滚动条的位置
    var d_num = $(".sidebar li").length;   //获取当前锚点元素的个数
    var m_width = $("#content").height();   //获取目标内容高度
    var a_width = parseInt(m_width / d_num);   //计算每个对应内容平均所占的高度
    $(".sidebar li").click(function () {    //当点击某个元素时改变自身的背景颜色和目标元素的位置实现平滑移动
        //this.表示当前所有元素; $(this)表示点击的这个元素 ，.addClass()表示添加的样式名称，.siblings()表示这个元素的所有兄弟级元素，此处表示span，
        // .removeClass()表示删除的样式名称
        $(this).addClass("current").siblings().removeClass("current");     //改变自身背景元素保持唯一
        var page_height=$(window).scrollTop();     //获取当前滚动条位置
        console.log($(window).scrollTop())
        var m_num = $(this).index();       //获取目标元素对应内容个数
        m_content_height = m_num * a_width; //计算出目标内容相对窗口高度
        s=m_content_height-page_height;     //计算出当前和目标位置距离
        // $(window).scrollTop(m_content_height).slideDown(3000);
        var i = 0;
        var end = 0;
        if(s>0){
            var time = setInterval(function () {
                i++;
                end =page_height +i*1.2*i
                console.log(end);
                $(window).scrollTop(end)
                if (end > m_content_height) {
                    clearInterval(time);
                }
            }, 40);
        }else{
            var time = setInterval(function () {
                i++;
                end =page_height-i*1.2*i
                console.log(end);
                $(window).scrollTop(end)
                if (end <m_content_height) {
                    clearInterval(time);
                }
            }, 40);
        }
        // $("#content").height(m_content_height); //设置目标元素高度，也就是跳转到或改变当前窗口某位置
        // $("#content").animate({ "top:": m_content_height+"px" }, 600);
    })
})
    // //方法二（）通过改变内容元素的位置；
    // $(".sidebar li").click(function () {    //当点击某个元素时改变自身的背景颜色和目标元素的位置实现平滑移动
    //     $(this).addClass("current").siblings().removeClass("current");     //改变自身背景元素保持唯一
    //     var clicknum = $(this).index();       //获取目标元素对应内容个数

    //     alert(clicknum);        //打印值
    //     alert($("#content").children().eq(clicknum));        //打印值

    //     $("#content").children().eq(clicknum).animate({ "top": "180px" }, 600); //设置目标元素高度，也就是跳转到或改变当前距离窗口某位置

    // })



//以下错误：
// var d_num=$(".sidebar li").length;   //获取当前锚点元素的个数
// var m_width=$("#content").height();   //获取目标内容高度
// var a_width=parseInt(m_width/d_num)   //计算每个对应内容平均所占的高度
// $(".sidebar li").click(function(){    //当点击某个元素时改变自身的背景颜色和目标元素的位置实现平滑移动
//     //this.表示当前所有元素; $(this)表示点击的这个元素 ，.addClass()表示添加的样式名称，.siblings()表示这个元素的所有兄弟级元素，此处表示span，
//         // .removeClass()表示删除的样式名称
//     $(this).addClass("current").siblings().removeClass("current");     //改变自身背景元素保持唯一
//     var m_num=$(this).index();       //获取目标元素对应内容个数
//         m_content_height=m_num*a_width; //计算出目标内容相对窗口高度

//         alert(m_content_height);        //打印值

//     $("#content").height(m_content_height); //设置目标元素高度，也就是跳转到或改变当前窗口某位置
    // $(".box").animate({"left":m_content_height},600);

// })


//设置某元素点击状态背景颜色变化
//方法一（）
// $(".navfix").on('click', function (event) {
//     $(".navfix").css("color","black");
//     $(this).css("color","red")
// })
//方法二（）
// $(".navfix").each(function(i){
//     // $(".navfix").css("color"," #ccc;");
//     $(this).click(function(){
//         $(".navfix").eq(i).css("color","red");
//      })
// });


    // if (window.scrollY >= 65) {
        //     console.log(window.scrollY);
        //     $(".heard").css({ "top": "0px", "position": "fixed" })
        // }
// app.directive('whenScrolled', function () {
//     return function (scope, elm, attr) {
//         // 内层DIV的滚动加载  
//         var raw = elm[0];
// console.log(raw.scrollTop ,":",raw.offsetHeight ,":",raw.scrollHeight)

//         elm.bind('scroll', function () {
//             if (raw.scrollTop + raw.offsetHeight >= raw.scrollHeight) {
//                 scope.$apply(attr.whenScrolled);
//             };
//         });
//     };
// });

