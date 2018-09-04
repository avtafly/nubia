



<!DOCTYPE html>
<html>
    <head>
    	<noscript>
			<meta http-equiv="refresh" content="0;url=about:noscript" />
		</noscript>
		<meta name="renderer" content="webkit"><!-- webkit(极速核)|ie-comp(ie兼容内核)|ie-stand(ie标准内核) -->
		<meta http-equiv="X-UA-Compatible" content="IE=Edge" />
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
        <title>对话窗口</title>
		<link href="refactor/style/layout/new_main_nubia.css?v=1531956552182" rel="stylesheet" type="text/css"/>
        <link href="refactor/style/theme/custom/alert/new-custom-v1-nubia/skin.css?v=1531956552182" rel="stylesheet" type="text/css" title="newSkin"/>
		
		<style type="text/css">#track{position:absolute;top:0;left:0;z-index:-1;visibility:hidden;}</style>
	</head>
	<body>
		<div id="container">
			<div id="header">
				<div class="h_content">
					<!--头部功能栏、广告、关闭按钮-->
					<div id="logo" class="hleft"></div>
					<div id="exitChat" class="close"><em id="closeIcon"></em>结束对话</div>
					<div class="lefttop hright" id="funIcon">
					</div>
				</div>
			</div>
			<div id="cont">
				<div id="mid_Left_content" class="mid_l_c">
					<div class="s_content"><span id="headerBox" ></span><span id="headerBoxTime"></span></div>
					<div class="side" id="side">
						<div id="center_left1_container" class="center_left1_container">
							<div id="history">
								
									
								
							</div>
							<div id="uploadFileBox" style="display:none;">
								<iframe id="uploadFileFrame" src="sendFile.htm"></iframe>
							</div>
							<div id="emotionsBox" class="unselect hide" unselectable="on"></div>
							<div id="sysTip" style="display:none;"></div>
						</div>
					</div>
					<!--end side-->
					<div class="bottom" id="bottom">
						<div class="center_left">
							<div class="center_left1">
								<div id="tool_wrap">
									<ul id="toolsbar">
										<li id="fontSize" lim:init=1 style='display:none'></li>
										<li id="file" lim:init=1 style='display:none' title="传送文件"></li>
										<li id="save"  style='display:none'  title="保存记录"></li>
										<li id="historyRecord" style=display:none title="历史记录"></li>
										
                                        <li id="switch" class="open" title="关提示音"></li>
										<li id="language" title="语言" style='display: none;'></li>
										<li id="emoticons" class="unselect" unselectable="on" lim:init=1 style='display:none' title="表情"></li>
										<li id="active" lim:init=1 style='display:none' title="截屏"></li>
										<li id="cBrowser"  style='display:none' title="远程帮助"></li>
										<li id="remoteHelp"  style='display:none' title="远程协助"></li>
										<li id="callBack" style=display:none title="电话回拨"></li>
				                        <li id="qq"  style='display:none' account="" title="添加qq好友"></li>
										<li id="evaluation"  style='display:none' title="评分"></li>
										<li id="xt800Help" lim:init=1 style='display:none' title="远程控制"></li>
										<li id="voiceToText" class="voice_open"  style='display:none' title="语音转文字"></li>
										<li id="textToVoice" class="voice_open"  style='display:none' title="文字转语音"></li>
										<li id="chatAgent"  style='display:none' title="二维码"></li>
										<div class="clear"></div>
									</ul>
								</div>
								<!--end tool_wrap -->
								 <div id="popular-problem" ></div> 
							</div>
							<!--end center_left2 -->
							<div class="center_left2">
								<div id="inputarea">
									<textarea id="inputbox"></textarea>
								</div>
								<div id="voiceChangeText">
									<div id="voiceBut"></div>
								</div>
							</div>
							<div class="center_left3">
								<span id="footerBox" class="footerBox"></span>
								<div class="closeEnterBar">
									<div class="entera">
										<div id="enter">发 送</div>
										<div id="shortcutkey"></div>
										<div id="shortKeyText" class="shortKeyText">Ctrl+Enter</div>
										<ul id="shortKeyMenu" style="display:none;">
											<li data-short="Enter"><em></em><a href="#">[发送快捷键:Enter]</a></li>
											<li data-short="Ctrl+Enter"><em></em><a href="#">[发送快捷键:Ctrl+Enter]</a></li>
										</ul>
										<div class="clo"></div>
									</div>
								</div>
							</div>
						</div>
						<!--end center_left -->
					</div>
					<!--end bottom-->
				</div>
				<div id="spacer">
					<div id="collapseBtn"></div>
				</div>
				<div class="main" id="main">
					<div class="center_right" id="banner">
					  <div id="adArea"></div>
					  <div id="advertisingBar" class="advertisingBar">
			   	          <div class="left_buts">
				              <a href="javascript:void(0);" onclick="return false;" class="righta_d" id="righta_d">热门问题</a>
				          </div>
				          <div id="newslist"></div>
			          </div>
					</div>
					<div class="clo"></div>
				</div>
			</div>
			<div id="footer">
				<div class="f_content"></div>
			</div>
		</div>
		<script type="text/javascript" src="scripts/jquery-1.6.3.min.js?version=1531956552182"></script>
        <script type="text/javascript" src="scripts/qrcode.min.js?version=1531956552182"></script>
        <script type="text/javascript">
			var isHejNewSkin = false;
			var fromChatBoxInfo="";
			var lang=0;
				conPort="80";
			if(!LIM)var LIM={};
			LIM.config={"hasnewreplay":"false","companyID":"9018","protocol":"http","configContent": "live800_chatBanner=http%3A%2F%2Fcs.nubia.com%2Flive800%2Fproduct%2Fnubia%2Fbanner_20180420.png&live800_chatBannerLink=https%3A%2F%2Fwww.nubia.com%2Findex.php&live800_chatExitSurvey=0&live800_showSurviceTip=0&live800_showOneMonthSurveyTip=0&live800_showMesBuddle=1&live800_showVoiceChat=0&live800_showTextToVoice=0&live800_capture=1&live800_chatLogoUrl=http%3A%2F%2Fcs.nubia.com%2Flive800%2Fproduct%2Fnubia%2Flogo2.png&live800_chatLogoLink=https%3A%2F%2Fwww.nubia.com&live800_show_survey=0&live800_survey_chater_times=5&live800_survey_operator_times=5&live800_staffService=1&live800_robotService=&live800_onlineLeaveword=0&live800_complaint=0&live800_selfSeachService=0&live800_intelligentSearch=0&live800_userDefinedButton=1&live800_adLeftName=%E5%AE%98%E6%96%B9%E6%B4%BB%E5%8A%A8&live800_adRightName=%E7%83%AD%E7%82%B9%E7%9F%A5%E8%AF%86&live800_adLeftEnable=0&live800_adRightEnable=0&live800_rightExtendWindow=0&live800_rightWindowIds=#6#8#9#&live800_video=0&live800_commonQuestion=1&live800_qq=0&live800_msn=0&live800_fetion=0&live800_sms=0","baseUrl": "cs.nubia.com","baseHtmlUrl": "cs.nubia.com","baseChatClient": "/chatClient","skin":"new-custom-v1-nubia","robotInnerId":"","serviceType":"2","loginUrlEnable":true,"remoteHelp":false,"chatLogoUrl":"http%3A%2F%2Fcs.nubia.com%2Flive800%2Fproduct%2Fnubia%2Flogo2.png","chatLogoLink":"https%3A%2F%2Fwww.nubia.com","leavewordEnable":false,"cln":"nubia","pageKey":"LWS7yGQPazbmjT13ieAz","skillId":"","operatorId":"","showRule":"0","mesBubble":"1",
				"baseWebApp": "/live800","baseChatClient": "/chatClient","webDomains": "cs.nubia.com","appDomains": "cs.nubia.com","chatDirDomains": "cs.nubia.com"+"/live800"+"/chatClient","appDirDomains": "cs.nubia.com"+"/live800","configTimeout": "timeoutConfig=1&tipTime=5&overTime=6","language": "0","bannerUrl":"http%3A%2F%2Fcs.nubia.com%2Flive800%2Fproduct%2Fnubia%2Fbanner_20180420.png","bannerLink":"https%3A%2F%2Fwww.nubia.com%2Findex.php","exitSurvey":"0","timeoutTip":"亲爱哒，您很长时间没发消息了喔~~为了避免系统自动掉线，您可以隔1分钟发消息维持窗口哟 (*^__^*)","timeoutOver":"亲亲，由于长时间没有收到您的回复，先暂时关闭对话了呢，如果稍后有什么问题您可以再次联系我们哈~非常感谢您对努比亚的支持呢，再见啦！","isShowPreChat":true,"isShowUserDefined":true,"contact":"vid%3Dv1234558%26vna%3D","ip":"111.51.18.169","uniqueKey":"74455E65839F68946CD9095F6A5C7DC0_1534682566348_9018","isShowSurvey":false,"showSurveyChaterTimes":"5","showSurveyOperatorTimes":"5","showOperatorInfo":"0",
				"frequency":{enable:0,msgNum:6,notice:'%E5%8F%91%E8%A8%80%E8%BF%87%E9%A2%91%E7%B9%81%EF%BC%8C%E8%AF%B7%E6%82%A8%E8%80%90%E5%BF%83%E7%AD%89%E5%BE%85%EF%BC%81'},"forbidWord":{enable:1,word:["脑子被驴踢了","猪 ，操 死","求继续结束对话","sha bi","ha    bi ","被 gou ，操 死","猪 。操 死","被 猪 操","傻 比","丑八怪","丑 八怪孙子","被万人 操","死 全家","腊鸡","流浪汉 草了","玩意","沙壁","样子货","流浪汉草 了","shabi","女马","那只犬快点","滚","他妈的","他妈","狗","沙壁货","狗逼","没 屁 眼","没 有屁 眼","沙壁 货","沙壁  货","妓 女","妓  女","妓女","有个鸟用","妈逼","吃屎","笨蛋","傻B","脑残","卧槽","草泥马","操你妈","呆逼","傻逼","二逼","死逼","白痴","二痴","蛋白质","王八","贱人","东方标志","比样迪","SB","sb","去死","骂人","死全家","他爸死了","你爸死了"],notice:'%E5%B0%8A%E6%95%AC%E7%9A%84%E5%AE%A2%E6%88%B7%EF%BC%8C%E6%82%A8%E5%8F%91%E9%80%81%E7%9A%84%E4%BF%A1%E6%81%AF%E9%87%8C%E5%B8%A6%E6%9C%89%E7%89%B9%E6%AE%8A%E8%AF%8D%E6%B1%87xx%EF%BC%8C%E8%AF%B7%E6%82%A8%E5%88%A0%E9%99%A4%E8%AF%A5%E8%AF%8D%E6%B1%87%E5%90%8E%EF%BC%8C%E5%86%8D%E5%8F%91%E9%80%81%EF%BC%8C%E8%B0%A2%E8%B0%A2%21'},"busyWaitTime":60,"italking":"%3Cmarquee+scrollamount%3D%272%27+onMouseOver%3D%27this.stop%28%29%27+onMouseOut%3D%27this.start%28%29%27+OMG%3D%27%27%3E%3Ca+href%3D%22http%3A%2F%2Fwww.live800.com%22%0A++style%3D%22text-decoration%3A+none%3Bcolor%3A+rgb%28255%2C255%2C255%29%3B%22+target%3D%22_blank%22%3E%E9%A6%96%E9%A1%B5%3C%2Fa%3E%3C%2Fmarquee%3E","toleavemsg":"点击留言","speCodeLeaveUrl":"","speCode":"","sessionId":"74455E65839F68946CD9095F6A5C7DC0","surveyUrl":"","uploadUrl":"","humanAfterRobotEnable":true,"operatorOffLineAction":true,"operatorBusyAction":true,"isLogin":false,"loginUrl":"","live800Status":"1","selfSeachParms":"companyId%3D9018%26timestamp%3D1534682566356%26hashCode%3D38fb73422f75b492f042c8a0541ffe85%26contact%3Dvid%253Dv1234558%2526vna%253D","visitorName":"","myInfoUrl":"","productInfoUrl":"","notPCBreakDialogue":"1",
				"adLeftEnable":false,"adRightEnable":false,"adLeftName":"官方活动","adRightName":"热点知识","chatConfigId":"0","commonQuestion":"true","hasUrlAnalyse":false,"robotPolicyParam":"","isDefineEmotion":"1","oHeadImg":"refactor/style/images/o_h.png","vHeadImg":"refactor/style/images/v_h.png",
				"robotService":"false","staffService":"true","selfSeachServiceEnable":"false","onlineLeaveword":"false","complaint":"false","complaintLink":"","isMultiChater":true,"isApp":0,"isInnerPage":false,"showTextToVoice":false,"isNeedMediaJs":false,"robotToCustomer":"0","queueAmountTimes":"100","notTurnCustomer":"0","notTurnCustomerTimes":"100","notTurnCustomerTips":"0",
				"ipProhibit":"false","userProhibit":"false","intelligentSearch":"false","intelligentSearchLink":"","userDefinedButton":"true","userDefinedButtonJson":"[{'id':'1','name':'%E7%83%AD%E9%97%A8%E4%BA%A7%E5%93%81','showType':'0','pic':'http%3A%2F%2Fcs.nubia.com%2Flive800%2Fproduct%2Fnubia%2Fic_products.png','link':'http%3A%2F%2Fshop.nubia.com%2F'},{'id':'2','name':'%E4%B8%AA%E4%BA%BA%E4%B8%AD%E5%BF%83','showType':'0','pic':'http%3A%2F%2Fcs.nubia.com%2Flive800%2Fproduct%2Fnubia%2Fic_center.png','link':'https%3A%2F%2Faccount.nubia.com%2Fprofile%2Flogin%2F%3Fback_url%3Dhttp%253A%252F%252Fwww.nubia.com%252Fprofile.php%253Fa%253Dlogin%2526returnUrl%253D%25252Fmember.php'},{'id':'3','name':'%E8%87%AA%E5%8A%A9%E6%9C%8D%E5%8A%A1','showType':'0','pic':'http%3A%2F%2Fcs.nubia.com%2Flive800%2Fproduct%2Fnubia%2Fic_service2.png','link':'http%3A%2F%2Fwww.nubia.com%2Fservice.php'},{'id':'4','name':'%E5%94%AE%E5%90%8E%E7%BD%91%E7%82%B9','showType':'0','pic':'http%3A%2F%2Fcs.nubia.com%2Flive800%2Fproduct%2Fnubia%2Flocation.png','link':'http%3A%2F%2Fwww.nubia.com%2Fservice.php%3Fsid%3D3'}]","rightWindowJson":"[{'id':'6','title':'%E7%83%AD%E7%82%B9%E7%9F%A5%E8%AF%86','url':'rightwindowJump.jsp','type':'rightAd','isSystem':'1','hasClose':'1','staticWindow':'0','width':'285','height':'410','homepageType':'0'},{'id':'8','title':'%E9%A6%96%E9%A1%B5','url':'http://www.live800.com','type':'homePage','isSystem':'1','hasClose':'0','staticWindow':'0','width':'285','height':'380','homepageType':''},{'id':'9','title':'%E5%AE%98%E7%BD%91','url':'http://www.nubia.com/index.php','type':'%E5%8A%AA%E6%AF%94%E4%BA%9A%E5%AE%98%E7%BD%91','isSystem':'0','hasClose':'1','staticWindow':'0','width':'285','height':'380','homepageType':''}]","chatAgentUrl":"","carryParamsFuncOpen":"0",
				"showRightWindow":"0","homePageType":"","homePageUrl":"","operatorCrm":"false","isOpenPhoneAccess":true,"visitor":"user","isVideo":"0","videoUrl":"","newService":"[{'id':'1','enable':'1','value':'1','service':'非常满意'},{'id':'2','enable':'1','value':'2','service':'满意'},{'id':'3','enable':'1','value':'3','service':'一般'},{'id':'4','enable':'1','value':'4','service':'不满意客服'},{'id':'5','enable':'1','value':'5','service':'不满意其他'}]","surveyStarShow":"1","serviceZones":"",
				"routingParam":"","robot":{"enable":false,"robotJs":"http://cs.nubia.com/robot/chatClient/refactor/scripts/robot.js"},"callback":"false","autoTip":{"enable":0,"info":""},"guideTip":{"enable":0,"info":""}};
			LIM.resource={"changfunc_tip_0":"更多功能","changfunc_tip_1":"人工服务","changfunc_tip_2":"在线留言","changfunc_tip_3":"建议投诉","changfunc_tip_4":"自助查询","changfunc_tip_5":"智能搜索","changfunc_tip_6":"常见问题","changfunc_tip_7":"与服务器连接好像有点堵。请求未发送成功","changfunc_tip_8":"视频通话","changfunc_tip_9":"自助答疑","chater_info_phone_error":"请输入正确的电话号码!","validatejstip8":"指定的元素不存在","categroup1":"您好！欢迎您光临玫琳凯在线客服，请选择您所需咨询的业务类型，并点击进入：","categroup2":"其他业务尚未开通在线客服，请拨打客服热线进行咨询","categroup3":"销售队伍服务专线","categroup4":"欢迎光临唯品会，请选择您需要咨询的业务类型，并点击进入："};
       		LIM.loadClientJS = "refactor/scripts/client_for_nubia.js?version=1531956552182";
       		LIM.plugins = [["blockey.js?version=1531956552182", "blockey"],["scripts/iscroll.js?version=1531956552182","iscroll"]];
       		if(LIM.config.isNeedMediaJs||LIM.config.showTextToVoice){
       			LIM.plugins.push(["refactor/scripts/media.js?version=1531956552182","mediaJs"]);
       		}
       		var jsessionId = ';jsessionid=74455E65839F68946CD9095F6A5C7DC0';
       		
        	
        	
        	
        </script>
		<script type="text/javascript" src="refactor/scripts/init.js?version=1531956552182"></script>
		<script type="text/javascript" src="refactor/scripts/common_util.js?version=1531956552182"></script>
		<script type="text/javascript" src="refactor/scripts/changFunc.js?version=1531956552182"></script>
		<script type="text/javascript">
			if(navigator.appVersion.indexOf("MSIE") > 0){
				document.write("<bgsound id='sound' loop='1' src='sounds/sound.wav' />");
		    }else{
		    	document.write("<audio id='sound' src='sounds/sound.wav' autoplay></audio>");
		    }
			//将历史框内容滚动到最上面
	   		objId("history").scrollTop = 999999;
	   		if(true){
				html = "<script ";
				html +="type=\'text/javascript\' ";
				html +="src=\'refactor/scripts/catchScreen.js?version=1531956552182\'>";
				html +="<\/script>";
				document.write(html);
			};
			document.write('<img id="track" src="style/traack.gif;jsessionid=74455E65839F68946CD9095F6A5C7DC0?pk=LWS7yGQPazbmjT13ieAz&_t='+new Date().getTime()+'"/>');
		</script>
		<iframe src="closevisitor.htm" style="display:none" height="0" width="0"></iframe>
		<iframe id="remoteHelpFrame" name="remoteHelpFrame" src="space.gif"	style="display:none" height="0" width="0"></iframe>
		
    </body>
</html>