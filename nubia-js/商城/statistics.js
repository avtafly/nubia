;(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-37192071-11', 'auto');
ga('send', 'pageview');

  
(function(p,l,o,w,i,n,g){if(!p[i]){p.GlobalNubiaNamespace=p.GlobalNubiaNamespace||[];p.GlobalNubiaNamespace.push(i);p[i]=function(){(p[i].q=p[i].q||[]).push(arguments)};p[i].q=p[i].q||[];n=l.createElement(o);g=l.getElementsByTagName(o)[0];n.async=1;n.src=w;g.parentNode.insertBefore(n,g)}}(window,document,"script","//api-data.nubia.com/v1.1.0/na.js", "nubiabee"));
nubiabee('newTracker', {
    appId: '65128',
    appkey:'2f247ea95f11464e81dbe25d15af5842', 
    chanelId:'pc',
    version:'1.0.0',
    autoTrack:false,
    plMaxTime: 3600000
});
//获取来源begin
function specialnubiabee() {
    var _extrainfo = arguments[4],
        c_name = 'nubiavisitsource',
        c_value = '';
    if (document.cookie.length>0) {
        c_start=document.cookie.indexOf(c_name + "=")
        if (c_start!=-1) {
            c_start=c_start + c_name.length+1;
            c_end=document.cookie.indexOf(";",c_start);
            if (c_end==-1) c_end=document.cookie.length;
            c_value = decodeURIComponent(document.cookie.substring(c_start,c_end));
        }
    }
    _extrainfo.visitsource = c_value;
    nubiabee(arguments[0],arguments[1],arguments[2],arguments[3],_extrainfo);
}
;(function(){
    var _setCookie = function (cookiename, value, expires) {
        if (!isNaN(expires)) {
            expires = 0;
        }
        value = encodeURIComponent(value);
        document.cookie = cookiename + "=" + value + "; expires=" + expires + "; path=/; domain=.nubia.com";
    },
        _getCookie = function getCookie(c_name) {
        if (document.cookie.length>0) {
            c_start=document.cookie.indexOf(c_name + "=")
            if (c_start!=-1) {
                c_start=c_start + c_name.length+1;
                c_end=document.cookie.indexOf(";",c_start);
                if (c_end==-1) c_end=document.cookie.length;
                return decodeURIComponent(document.cookie.substring(c_start,c_end));
            }
        }
        return "";
    };
    
    var _referrerurl = document.referrer,
        _cookiename = 'nubiavisitsource',
        _sourcetype = '',
        _sourcedescript = '';
    if (_referrerurl == '') {
        _referrerurl = location.href;
    }
    _sourcedescript = _referrerurl.split("://")[1].split('/')[0];
    
    var _visitsource = _getCookie(_cookiename);
    if (_visitsource == '') {
        if (_referrerurl.indexOf('source=pc') >= 0 || _referrerurl.indexOf('source=wap') >= 0) {
            _sourcedescript = 'www.nubia.com/share';
        } else if (_referrerurl.indexOf('sharereward.php') >= 0) {
            _sourcedescript = 'www.nubia.com/sharereward';
        } else if (_referrerurl.indexOf('source=chanet') >= 0) {
            _sourcedescript = 'www.chanet.com.cn';
        } else if (_referrerurl.indexOf('source=linktech') >= 0) {
            _sourcedescript = 'www.linktech.cn';
        } else if (_referrerurl.indexOf('source=emar') >= 0) {
            _sourcedescript = 'www.yiqifa.com';
        } else if (_referrerurl.indexOf('source=duomai') >= 0) {
            _sourcedescript = 'www.duomai.com';
        } else if (_referrerurl.indexOf('hmsr=toutiao') >= 0) {
            _sourcedescript = 'www.toutiao.com';
        }
        _visitsource = _sourcedescript;
    }
    _setCookie(_cookiename,_visitsource,0);
})();
specialnubiabee('trackStructEvent','enter_to_portal_page','count',1,{});
//获取来源end

var _hmt = _hmt || [];

;(function() {
  var hm = document.createElement("script");
  hm.src = "//hm.baidu.com/hm.js?ed03287223030af4802489c1974077c6";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();

var shopStatistics = function() {
  var hm = document.createElement("script");
  hm.src = "//hm.baidu.com/hm.js?4c721ece5961bc6c4b94bfcbef91f913";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
};

if (document.domain == 'shop.nubia.com') {
	shopStatistics();
}