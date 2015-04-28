var cliArgs = require('./cli.js');

var options = {
  crawlerOptions: {
    startUrls: [
      cliArgs.startURL,
    ],
    allowedDomains: [ // optional
      cliArgs.allowedDomain
    ]
  },
  shotOptions: {
    screenSize: {
      width: cliArgs.windowWidth,
      height: cliArgs.windowHeight
    }, 
    shotSize: {
      width: cliArgs.windowWidth, 
      height: 'all'
    },
    renderDelay: cliArgs.renderDelay
  }
};

module.exports = options;