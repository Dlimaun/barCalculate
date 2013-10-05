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

jQuery(".link").off().on('click', function(){
    jQuery('.link').removeClass('active');
    jQuery(this).addClass('active');
    
    var li_link = jQuery(this),
    href        = li_link.data('href');
                    
    set_pagina(href);    
});

function set_pagina(href) {
    console.log('clicked page', href);
    jQuery('#page').children().remove();
    jQuery('#page').load(href);
}


function verifica_internet() {
    return window.navigator.onLine;
}