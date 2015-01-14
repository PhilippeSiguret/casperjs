var casper = require('casper').create();

casper.start('http://www.lemonde.fr/', function() {
    this.echo(this.getHTML('p.description'));
});

casper.run();