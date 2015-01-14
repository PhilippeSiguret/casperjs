//appel de la biliothèque Casper
var casper = require('casper').create();
casper.start('https://www.linkedin.com/uas/login', function() {
    this.echo(this.getTitle());
});
casper.run();
