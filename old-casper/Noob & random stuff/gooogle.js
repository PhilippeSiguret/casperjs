var casper = require('casper').create();
var urls = ['http://google.com/', 'http://yahoo.com/','http://casperjs.org'];

casper.start().eachThen(urls, function(response) {
	this.echo(urls);
  this.thenOpen(response.data, function(response) {
    console.log('Opened', response.url);
  });
});

casper.run();