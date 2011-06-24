/*
 *  jquery.qtmpl.js
 *
 *  Created by Michael C. Beck on 2010-01-18.
 *  Copyright qualeapps.com. All rights reserved. See license for details
 *  more info at http://github.com/awesomecode/qtmpl
 *
*/



(function($) {

  $.fn.qTmpl = function(tmplId, data) {
    var trimmed = $.trim($(tmplId).html());
    return this.each(function(){
      var el = $(this);
      var bla = '';
       if($.isArray(data)){
          $.each(data, function(key, val) {
      		  bla += trimmed.replace(/{{=(.+?)}}/g, function(matched, id) { return checkExistance(id, val)})
          })
        } else {
           bla += trimmed.replace(/{{=(.+?)}}/g, function(matched, id) { return checkExistance(id, data)})
        }
      el.html(bla);
    });
  };

  // Check for existance of value or return an empty string
  function checkExistance(prop, obj) {
			var parts = prop.split("."),
	        value = '';
	    for (var i = 0, l = parts.length; i < l; i++) {
	        var part = parts[i];
	        if (obj !== null && typeof obj === "object" && part in obj) {
	            obj = obj[part];
	            if (i == l-1) {
	                value = obj;
	            }
	        }
	        else {
	            value = "";
	        }
	    }
	    return value;
	};

})(jQuery);