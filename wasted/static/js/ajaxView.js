var require_ajaxView=_.once(function(){var DOM={tmplScreen:"#hbs_ajaxView_screen",screen:'\x3e [data-ajax-view\x3d"screen"]'};function removePending($box){$box.find(DOM.screen).spin(false).remove()}function addPending($box){removePending($box);var tmpl=Handlebars.compile($(DOM.tmplScreen).html());$box.append(tmpl());$box.find(DOM.screen).spin({lines:8,length:1,scale:.5,corners:0,color:"#000"})}return{req:function(option){if(option.pending!==undefined)addPending(option.pending.$box);$.ajax(option.jqAjax).always(function(){if(option.pending!==
undefined)removePending(option.pending.$box)})}}});