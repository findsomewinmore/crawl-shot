var expect = require("chai").expect;
var cleanUrl = require("../lib/clean-url.js");
 
describe("Clean Url", function(){
 	it("should return legal filename", function(){
		var urls = [
			'http://www.example.com',
			'http://www.example.com/',
			'http://www.example.com/?test',
			'http://www.example.com/?test=test',
			'http://www.example.com/?',
			'http://www.example.com/#',
		];

		var results = [];
		urls.forEach(function(e, i, a){
			results.push(cleanUrl(urls[i]));
		});		 

		expect(results[0]).to.equal("http---www-example-com");
		expect(results[1]).to.equal("http---www-example-com-");
		expect(results[2]).to.equal("http---www-example-com--test");
		expect(results[3]).to.equal("http---www-example-com--test-test");
		expect(results[4]).to.equal("http---www-example-com--");
		expect(results[5]).to.equal("http---www-example-com--");
	});
});