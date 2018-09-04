$(function(){
	setTimeout(function(){
		$.ajax({
			type:"get",
			url:"/page/footer",
			success: function(res){
				//console.log(res);
				$('body').append(res);
				var html='<b class="wxewm"><img src="https://static.nubia.cn/shop/images/nb-weixin-code-figure.jpg" ><span></span></b>';
        		$("#wx").parent().append(html).css("position","relative");
				
				$("#wx, .text-wechat").hover(function(){
					$(this).children('b').show().animate({opacity:1},300)
				}, function(){
					$(this).children('b').stop().animate({opacity:0},300,function (){ $(this).hide() })
				})
			},
			error: function(err){
				console.log(err)
			}
		});
	}, 100);
	$("body").on("click", '.nb-et-top', function(){
	    $('body,html').stop().animate({scrollTop:0},500);
	    return false;
	});
})

$('body').on('click', '#selectCountry', function(){
	$.ajax({
		type:"get",
		url:"/page/globalSite/query",
		success: function (data) {
            var countries = data;
            countries += '<div class="col-sm-12 pbl"><div class="nav-header">Global</div><ul class="nav nav-pills nav-stacked col-sm-3"><li class=""><a href="/en/index.html"><span class="icon-globe mrs icon-lg"></span>  Global (English)</a></li></ul></div>';
            $('#countrylist').html(countries);
        },
		error: function(err){
			console.log(err)
		}
	})
})
function live800talk(){
	window.open("http://www.nubia.com/live800.php?a=showchatbox&url=" + window.location.href);
}

//问题反馈
function clearForm() {
    jQuery('#feedbackQuestion').val('');
    jQuery('#feedbackQuestionUrl').val('');
    jQuery('#feedbackContact').val('');
    jQuery('#captcha_code').val('');
    jQuery('#errorTip').html('').hide();
}
function getFeedbackType() {
    jQuery.get('/problemreport.php?a=getFeedbackType', function(resp) {
        jQuery('#feedbackType').html(resp);
    });
}
function changeCaptcha() {
    jQuery('#feedbackCaptchaImg').attr('src', '/profile.php?a=captcha&ram=' + Math.random());
}
function feedbackShowBg() { 
    var bh = jQuery("body").height(); 
    var bw = jQuery("body").width(); 
    jQuery("#feedback_addip_zz").css({ 
        height:bh, 
        width:bw, 
        display:"block" 
    }); 
    jQuery("#feedback-dialog").show(); 
} 

function feedbackCloseBg() { 
    jQuery("#feedback_addip_zz,#feedback-dialog").hide(); 
}
jQuery("body").on("click",".feedback_dialog_close", function(){
    feedbackCloseBg();
})
function showFeedBack() {
    jQuery('#nb-footer').css('z-index', 10000);
    jQuery('#nb-footer .nubia-copyright .nb-footer-func').css('z-index', 1);
    clearForm();
    getFeedbackType();
    changeCaptcha();
    var nav_user = navigator.userAgent;
	feedbackShowBg();
}
var captchaTag = false;
function checkFeedbackCaptcha() {
    var val = jQuery('#captcha_code').val();
    if ('' == val) {
        captchaTag = false;
        jQuery('#errorTip').html("验证码不能为空").show();
    } else {
        jQuery.ajax({
            type: "post",
            url: '/profile.php?a=ajaxCheckCaptcha',
            data: {captcha: val},
            async: false,
            success: function (r) {
                if (!r.result) {
                    jQuery('#errorTip').html('').hide();
                    captchaTag = true;
                } else {
                    captchaTag = false;
                    jQuery('#errorTip').html("错误的验证码，请重新输入").show();
                }
            }
        });
    }
}
jQuery('body').on('blur','#captcha_code', function(){
    checkFeedbackCaptcha();
});
jQuery('body').on('click', '#submitQuestion', function(){
    var feedbackType = jQuery('#feedbackType').val();
    if (feedbackType == 0) {
        alert('请选择问题类型!');return false;
    }
    var feedbackQuestion = $('#feedbackQuestion').val();
    if (feedbackQuestion.length < 10) {
        alert('请输入问题描述（10-200个字）！');return false;
    }
    if (captchaTag == false) {
        alert('请输入正确的验证码！');return false;
    }
    var feedbackQuestionUrl = jQuery('#feedbackQuestionUrl').val();
    var feedbackContact = jQuery('#feedbackContact').val();
    var rule = /(^1[3|4|5|6|7|8]\d{9}$)|(^\++\d{2,}$)/;
    var rule2 = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
    if (feedbackContact.length > 60) {
        alert('联系方式长度不能超过60个字符！');return false;
    }
    if (!rule.test(feedbackContact) && !rule2.test(feedbackContact)) {
        alert('联系方式请输入正确格式的手机号码或邮箱！');
        return false;
    }

    var captcha = jQuery('#captcha_code').val();
    jQuery.post('/problemreport.php?a=commit', 
        {
            feedbackType:feedbackType,
            feedbackQuestion:feedbackQuestion,
            feedbackQuestionUrl:feedbackQuestionUrl,
            contact:feedbackContact,
            captcha:captcha
        },
        function(resp) {
            alert(resp.message);
            if (resp.result == 0) {
                feedbackCloseBg();
            }
        }
    );
});
function countWord() {
    var qe = jQuery('#feedbackQuestion');
    var qLength = qe.val().length;
    var maxLimit = 200;
    if (qLength > maxLimit) {
        qe.val(qe.val().substr(0, maxLimit));
    }
    var wordLeft = maxLimit - qLength;
    if (wordLeft < 0) {
        wordLeft = 0;
    }
    jQuery('#wordLeft').html(wordLeft);
}
