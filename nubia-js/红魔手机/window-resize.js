/**
 * Created by nubia on 17/6/23.
 */
$(function () {
    $(function () {
        big();
        $(window).resize(function () {
            big()
        });
        function big(){
            var w=$(window).width();
            var left=w-$(".big>div").width();
            if(w<=1920){
                $(".big>div").css({
                    "left":left/2
                })
            } else{
                $(".big>div").css({
                    "left":0
                })
            }
        }
    })
})