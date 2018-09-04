(function(){
    if(window.XMLHttpRequest) { // Mozilla, Safari, IE7+ ...
        var xhr = new XMLHttpRequest();
    } else if(window.ActiveXObject) { // IE 6 and older
        xhr = new ActiveXObject("Microsoft.XMLHTTP");
    }
    
    function stateChange(url) {
        if(xhr.readyState === XMLHttpRequest.DONE) {
            if(xhr.status === 200) {
                document.write(xhr.responseText);
            } else {
                console.log('fetchURL加载出错:' + url);
            }
        }
    }
    
    //默认同步get加载 
    window.fetchURL = function(url, method, async) {
        method = method || 'GET';
        async = async || false;
        
        xhr.onreadystatechange = function(){ stateChange(url)}
        xhr.open(method, url, async);
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.setRequestHeader('Cache-Control', 'max-age=600');
        xhr.send(null);
    }
})();