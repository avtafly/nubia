/**
 * Created by nubia on 17/9/27.
 */
/**
 * Created by nubia on 17/5/23.
 */

$(function(){
    $(".carousel-inner>div:first-child").addClass("active");
    // var html1='<a  href="http://www.nubia.com/nubiaz17?type=blue" class="jgl"> 8G版</a>';
    // var html2='<a  href="http://www.nubia.com/nubiaz17lite" class="cx"> 畅享版</a>';
    // $(".sub-nav>.w1200").append(html1+html2);
    // $(".jgl,.cx").css({
    //     "top":"15px",
    //     "position":"absolute",
    //     "left":"110px",
    //     "text-decoration":"none",
    //     "border-left":"1px solid #aaa",
    //     "padding":"5px 0 5px  25px",
    //     "font-size":"18px"
    // });
    // $(".cx").css({"left":"200px"});
});
$(document).ready(function () {
    $("#nb-h-wrap,.sub-nav").css({"overflow":"hidden"});
    $(window).scroll(function () {

        if($(window).scrollTop()>66){$("#nb-h-wrap").css({"height":0,"border":"0"})}else{
            $("#nb-h-wrap").css({"height":"66px","border-bottom":"1px rgba(0,0,0,.1) solid"})
        }
        if($(window).scrollTop()>66){$(".sub-nav").css({"top":0})}else{
            $(".sub-nav").css({"top":"66px"})
        }
    })
});

(function() {
    "use strict";
    window.scrollReveal = new scrollReveal({ reset:false, move: "100px",mobile:true});
})();
