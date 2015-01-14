var casper = require('casper').create({
  verbose: true,
  logLevel: 'debug',
});

casper.start();

casper.then(function(){
	for (var i = 1; i<=60; i++) {
			this.echo(i + 'km a pieds');
	};
	this.echo('ca use les souliers')

});

casper.run();