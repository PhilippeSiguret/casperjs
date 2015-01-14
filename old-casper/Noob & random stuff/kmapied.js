var casper = require('casper').create({
  verbose: true,

});

var km = [];

casper.start();

casper.then(function(){
	for(var i=0; i<=51; i++){
		km = km.concat([i]);
	}
});

casper.then(function(){
	this.echo(km);
	this.echo(km.length);
});

casper.run();