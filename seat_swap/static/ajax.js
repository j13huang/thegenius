(function( ajax, $, undefined ) {
  ajax.getCookie = function(name) {
    var r = document.cookie.match("\\b" + name + "=([^;]*)\\b");
    return r ? r[1] : undefined;
  }
}( window.ajax = window.ajax || {}, jQuery ));

$(document).ready(function () {
  jQuery.postJSON = function(url, args, callback) {
    args._xsrf = ajax.getCookie("_xsrf");
    $.ajax({url: url, data: $.param(args), dataType: "text", type: "POST",
            success: function(response) {
        if (callback) callback(eval("(" + response + ")"));
    }, error: function(response) {
        console.log("ERROR:", response)
    }});
  };
});

