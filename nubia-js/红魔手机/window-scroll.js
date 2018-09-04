$(window).scroll(function(e) {
    var scrollTop=0;  
    if(document.documentElement&&document.documentElement.scrollTop){  
        scrollTop=document.documentElement.scrollTop;  
    }else if(document.body){  
        scrollTop=document.body.scrollTop;  
    }  
    if(scrollTop>0){ $("#nb-h-wrap,#tempdom").slideUp();}else{ $("#nb-h-wrap,#tempdom").slideDown();}
});