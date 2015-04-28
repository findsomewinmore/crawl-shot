var roboto = require('roboto');
var html_strip = require('htmlstrip-native').html_strip;
var cliArgs = require('./cli.js');
var options = require('./options.js');
var urlToFileName = require('./clean-url');
var capture = require('./capture');


module.exports = function() {
	//Create New Crawler
	var siteCrawler = new roboto.Crawler(options.crawlerOptions);

	var pages = [];

	//Add url to item object
	siteCrawler.parseField('url', function(response, $){
	  return response.url;
	});

	// Take Screenshots on page render event
	siteCrawler.on('item', function(item) {
	  if(pages.indexOf(item.url) < 0) {
	    capture(
	      item.url, 
	      process.cwd() +'/'+cliArgs.imageDir+'/'+urlToFileName(item.url) + '.'+cliArgs.imageType, 
	      options.shotOptions
	    );
	  }
	});

	siteCrawler.crawl();
};
