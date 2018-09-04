$(function () {
    var ofsetup;var ofsetdown;
    var p=0,t=0;
    $(window).scroll(function () {
        var h=$(window).height();
        p = $(this).scrollTop();
        function change1(up){
            ofsetup =parseFloat($(window).scrollTop()-$(up).offset().top)*0.1;
            ofsetup =ofsetup.toFixed(2);
            if(t<=p){//下滚
                $(up).css({
                    "transform": "translate3d( 0px,"+ofsetup+"px, 0px)"
                });
            } else{//上滚
                $(up).css({
                    "transform": "translate3d( 0px,"+ofsetup+"px, 0px)"
                });
            }
            if($(window).scrollTop()<($(up).offset().top-h) || $(window).scrollTop()>$(up).offset().top+$(up).height()){
                $(up).css({
                    "transform": "translate3d( 0px,0px, 0px)"
                });
            }
        }
        function change2(down){
            ofsetdown =parseFloat($(down).offset().top-$(window).scrollTop()-h+200)*-0.05;
            ofsetdown =ofsetdown.toFixed(2);
            if(t<=p){//下滚
                $(down).css({
                    "transform": "translate3d( 0px,"+ofsetdown+"px, 0px)"
                });
            } else{//上滚
                $(down).css({
                    "transform": "translate3d( 0px,"+ofsetdown+"px, 0px)"
                });
            }
            if($(window).scrollTop()<($(down).offset().top-h) || $(window).scrollTop()>$(down).offset().top+$(down).height()){
                $(down).css({
                    "transform": "translate3d( 0px,0px, 0px)"
                });
            }
        }
        setTimeout(function(){t = p;},0);
        for(var i=0;i<$(".moveup").length;i++){
            var arrup_h=$(".moveup:eq("+i+")").height();
            var arrup_t=$(".moveup:eq("+i+")").offset().top;
            if($(window).scrollTop()>(arrup_t-h+200) && $(window).scrollTop()<arrup_t+arrup_h){
                change1($(".moveup:eq("+i+")"));
            }
        }
        for(var n=0;n<$(".movedown").length;n++){
            var arrdown_h=$(".movedown:eq("+n+")").height();
            var arrdown_t=$(".movedown:eq("+n+")").offset().top;
            if($(window).scrollTop()>(arrdown_t-h+200) && $(window).scrollTop()<arrdown_t+arrdown_h){
                change2($(".movedown:eq("+n+")"));
            }
        }
    });

});