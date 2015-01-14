var casper = require('casper').create();

casper.start('http://www.lemonde.fr/', function() {
    this.echo(this.getHTML('p.txt15_140'));
});

casper.run();