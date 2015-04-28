var argv = require('minimist')(process.argv.slice(2));

var cliArgs = {
	startURL: argv.s || null,
	allowedDomain: argv.a || null,
	imageDir: argv.d || '.',
	windowWidth: argv.w || 1280,
	windowHeight: argv.h || 800,
	renderDelay: argv.r || 0,
	imageType: argv.f || 'png'
}

module.exports = cliArgs;
