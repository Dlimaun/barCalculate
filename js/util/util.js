function soNumeros(evt) {
    var theEvent = evt || window.event;
    var key = (theEvent.which) ? theEvent.which : theEvent.keyCode
    key = String.fromCharCode(key);
    var regex = /[0-9]/;
    if ([evt.keyCode || evt.which] == 8 || [evt.keyCode || evt.which] == 9 || [evt.keyCode || evt.which] == 13) //this is to allow backspace (8), tab(9), enter(13)
        return true;
    if (!regex.test(key)) {
        theEvent.returnValue = false;
        theEvent.preventDefault();
    }
}

jQuery(".link").off().on('click', function() {
    jQuery('.link').removeClass('active');
    jQuery(this).addClass('active');

    var li_link = jQuery(this),
            href = li_link.data('href');

    set_pagina(href);
});

var pageHref;
;
function set_pagina(href) {
    pageHref = href;
    console.log('clicked page', href);
    var div = jQuery(document.createElement('div'));
    div.load(href);
    div.addClass("container");
    div.addClass("fade-in");
    var page = jQuery('#page');
    page.children().remove();
    page.append(div);

}


function verifica_internet() {
    return window.navigator.onLine;
}