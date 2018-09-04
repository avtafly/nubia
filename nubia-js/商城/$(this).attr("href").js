/**
 * Created by nubia on 17/6/26.
 */
var add='<div id="nb-show-layer"><a style=" z-index: 10; " href="#" class="nb-sl-close"></a><div class="nb-video-layer" style=" z-index: 1; "><div class="bn-vl-box"></div></div></div>'
var hhh=$(window).height();
var www=$(window).width();
$("body").append(add);
$(".nb-sl-close,.nb-video-layer,.bn-vl-box").css({
    "display":"none",
    "opacity":0
});
$(".nb-video-layer").css({
    "width":www,
    "height":hhh
});
$(".bn-vl-box").css({
    "width":www*0.8,
    "height":hhh*9,
    "top":"5%",
    "left":"10%",
    "margin":0
});

$("#nb-show-layer").css("top",0);
$(".nb-sl-close").click(function (e) {
    e.preventDefault();
    $(".video-p").get(0).pause();
    $(".nb-sl-close,.nb-video-layer,.bn-vl-box").stop().animate({"opacity":0},500,function () {
        $(".nb-sl-close,.nb-video-layer,.bn-vl-box").css("display","none")
    });
});
$(".btnplay").click(function (e) {

    e.preventDefault();

    $(".nb-sl-close,.nb-video-layer,.bn-vl-box").css("display","block").stop().animate({"opacity":1},500);
    var url=$(this).attr("href");
    var html='<video class="video-p" autoplay controls  src='+url+' style="width:100%"></video>';
    setTimeout(function () {
        $(".video-p").trigger("play");
        console.log($(".video-p"))
    },2000);
    $(".bn-vl-box").html("").append(html);

})