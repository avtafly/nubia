function showHide( id )
{
  var el= document.getElementById( id );
  var bExpand = true;
  var images = el.getElementsByTagName("IMG");
  if (images[0].src.indexOf("minus.gif")!=-1)
  {
    bExpand = false;
    images[0].src="treeTopic/images/plus.gif";
  }else{
    images[0].src="treeTopic/images/minus.gif";
  }
  var subs=el.lastChild;
  if(bExpand)
    subs.style.display="block";
  else
    subs.style.display="none";
}
function showTopicDiv(){
	var el= document.getElementById("trees");
	el.style.visibility="visible";
	el.style.width = "350px";

}

function selectTopic(topic){
	var el = document.getElementById("trees");
	var e2 = document.getElementById("subject");
	el.style.visibility="hidden";
	e2.value=topic;
}