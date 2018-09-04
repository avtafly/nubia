var isIe=(document.all)?true:false;

function changeDefine_value(that){
	$("#mobile_pre_chat .item").removeClass("prechat_item_select");
	$(that).parents(".item").addClass("prechat_item_select");
	document.innerPreChat.submit();
}
function changeBackground(that,hoverbg) {
	$(that).css("background-image","url("+ hoverbg +")");
}
function recoverBackground(that,bg) {
	$(that).css("background-image","url("+ bg +")");
}
function checkForm(theForm) {
	if (document.getElementById("isAskl")) {
		if (document.getElementsByName("asklMember")[0].checked) {
			if(theForm.name.value==''){
				alert(LIM.localRes["innerPreChatTip1"]);
				return false;
			}
		} else if (document.getElementsByName("asklMember")[1].checked) {
			if(theForm.companyName.value==''){
				alert(LIM.localRes["innerPreChatTip2"]);
				return false;
			}
		} else {
			alert(LIM.localRes["innerPreChatTip3"]);
			return false;
		}
	} else {
		if (theForm.name.value == '') {
			alert(LIM.localRes["innerPreChatTip4"]);
			return false;
		}
		if (theForm.phone.value == '') {
			alert(LIM.localRes["innerPreChatTip5"]);
			return false;
		}
		if (theForm.subject.value == '') {
			alert(LIM.localRes["innerPreChatTip6"]);
			return false;
		}
	}
	return true;
}
//当onCancel中参数为true时为机器人转人工直接隐藏窗口即可；当不带参数时为关闭窗口
function onCancel(isCloseWindow) {
	if(typeof isCloseWindow !="undefined"&&isCloseWindow==false){
		if(LIM.config.robot.enable){
			var jumper = objId("jumper");
			UT.popWindow.hidden();
			jumper.style.cursor = "pointer";
			jumper.removeAttribute("disabled");
			LIM.config.robot.enable = true;
			globalChatHandle.chatStatus = "ROBOT";
		}else{
			CloseWebPage();
		}
	}else{
		CloseWebPage();
	}
}
function enable(type) {
	var name = document.getElementById("name");
	var companyName = document.getElementById("companyName");
	if ("1" == type) {
		name.readOnly = false;
		name.style.backgroundColor = "#FFFFFF";
		companyName.readOnly = true;
		companyName.value = "";
		companyName.style.backgroundColor = "#EEEFFF";
	} else {
		companyName.readOnly = false;
		companyName.style.backgroundColor = "#FFFFFF";
		name.readOnly = true;
		name.value = "";
		name.style.backgroundColor = "#EEEFFF";
	}
}

function newCheckForm(theForm){
	
	if(theForm.itemInfo){
        var collectItems = urlDecode(theForm.itemInfo.value);
        var newConfigObj = collectItems?eval("("+collectItems+")"):null;
        if(newConfigObj==null){
           return true;
        }
        var ItemNames = "";
        for(var i=0;i<newConfigObj.length;i++){
	        var obj = newConfigObj[i];
	        if(hasSpecialChar(theForm[obj.value].value)){
	        	alert(LIM.localRes["pre_specialchar"]);
 	            return false;
	        }
	        if(obj.req){
	        	if(obj.value=="gender"){
	    	        var genderE = theForm.gender;
	    	        var genderFlag = false;
	    	        for(var j=0;j<genderE.length;j++){
	    	            if(genderE[j].checked){
	    	                genderFlag = true;
	    	                break;
	    	            }
	    	        }
	    	        if(!genderFlag){
	    	            alert(LIM.localRes["validatejstip3"] + (obj.desc).replace(/　/g,"").replace(/\s/g,"").replace("　",""));
	    	            return false;
	    	        }
	    	    }else{
	    	        if(theForm[obj.value].value==""){
	        	        alert(LIM.localRes["validatejstip4"] + (obj.desc).replace(/　/g,"").replace(/\s/g,"").replace("　",""));
	                    return false;
	                }
	    	    }
	    	    if(obj.value=="phone1"){
	    	        if(theForm.phone1){
	    	            if(!isPhoneOrMobile(theForm.phone1,LIM.localRes["validatejstip5"])){
	    	                return false;
	    	            }
	    	            
		           }
	    	    }
	    	    if(obj.value=="phone2"){
		           if(theForm.phone2){
	  	               if(!isPhoneOrMobile(theForm.phone2,LIM.localRes["validatejstip5"],true)){
	  	                   return false;
	  	               }
	  	               
		           }
	    	    }
	    	    if(obj.value=="email"){
	    	    	if(!isEmail(theForm.email,LIM.localRes["validatejstip6"])){
	    	    	    return false;
	    	    	}	    	        
	    	    }
	        }
	        if(ItemNames == ""){
	            ItemNames = obj.value;
	        }else{
	             ItemNames = ItemNames + "," + obj.value;
	        }
	    }
	    theForm.ItemNames.value = ItemNames;
	}
	if(theForm.unSelectTip){
		var unselectTip = theForm.unSelectTip.value;
		if(theForm.userDefined.value==''){
		    alert(unselectTip);
		    return false;
		}
	}
	return true;    
}

function urlDecode(str){
	try{
		return decodeURIComponent(str.replace(/\+/g, ' ').replace(/%2B/g,'+'));
	}catch(e){
		return unescape(str).replace(/\+/g, ' ').replace(/%2B/g,'+');
	}
}

function hasSpecialChar(value){
	if(value!=undefined){
		var specialChar = /[\^|"'<>$*]/;
		return specialChar.exec(value);
	}
	return false;
}

function isPhoneOrMobile(elm,msg,ismobile){
  if (elm == null) {
    alert(LIM.localRes["validatejstip8"]);
    return false;
  }
  if(elm.length==0){return true;}
	var numberPatrn=/^[-,+]{0,1}[0-9]{0,}[.]{0,1}[0-9]{0,}$/;
    var phonePatrn=/^((\(\d{3,4}\))|(\d{3,4}\-?))?[1-9]\d{6,7}$/; //座机号码正则
	//var mobilePatrn=/^((\(\d{3}\))|(\d{3}\-))?13\d{9}$/;
	var mobilePatrn=/^((\(\d{3}\))|(\d{3}\-))?1([3,4,5,7,8])\d{9}$/; //手机号码正则
	if(mobilePatrn.exec(elm.value)||phonePatrn.exec(elm.value)){
		if(ismobile){
		    if(elm.value.length==11){
   			    return true;
		   }
		}else{
		   if(elm.value.length>5){
   			    return true;
		   } 
		}
  }
  if(msg.length!=0){
  	alert(msg);
  }
//   elm.focus();
   return false;
};

function isEmail(elm, msg) {
    if (elm == null) {
        alert(LIM.localRes["validatejstip8"]);
        return false;
    }
    var emailPatrn = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;
    if (emailPatrn.exec(elm.value)) return true;
    else {
        alert(msg);
//        elm.focus();
        return false;
    }
};