var webshot = require('webshot');

module.exports = function(url, filename, options){
	webshot(url, filename, options, function(err) {
	  if(err) {
	    console.error(err);
	  }
	});
};

