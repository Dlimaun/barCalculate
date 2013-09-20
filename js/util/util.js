function soNumeros(evt) {
    var theEvent = evt || window.event;
    var key = ( theEvent.which ) ? theEvent.which : theEvent.keyCode
    key = String.fromCharCode( key );
    var regex = /[0-9]/;
    if ([evt.keyCode||evt.which]==8 || [evt.keyCode||evt.which]== 9 || [evt.keyCode||evt.which]== 13) //this is to allow backspace (8), tab(9), enter(13)
        return true;
    if( !regex.test(key) ) {
        theEvent.returnValue = false;
        theEvent.preventDefault();
    }
}

function urlDecode(string, overwrite){
    if(!string || !string.length){
        return {};
    }
    var obj = {};
    var pairs = string.split('&');
    var pair, name, value;
    var lsRegExp = /\+/g;
    for(var i = 0, len = pairs.length; i < len; i++){
        pair = pairs[i].split('=');
        name = unescape(pair[0]);
        value = unescape(pair[1]).replace(lsRegExp, " ");
        //value = decodeURIComponent(pair[1]).replace(lsRegExp, " ");
        if(overwrite !== true){
            if(typeof obj[name] == "undefined"){
                obj[name] = value;
            }else if(typeof obj[name] == "string"){
                obj[name] = [obj[name]];
                obj[name].push(value);
            }else{
                obj[name].push(value);
            }
        }else{
            obj[name] = value;
        }
    }
    return obj;
}


function jsGet(param)
{
	var wl = window.location.href;
	var params = urlDecode(wl.substring(wl.indexOf("?")+1));
	return(params[param]);
}