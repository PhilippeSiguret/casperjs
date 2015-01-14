var casper = require('casper').create();

casper.start('http://fr.wikipedia.org/wiki/Wikip%C3%A9dia:Accueil_principal', function() {
    if (this.exists('h1.firstHeading')) {
        this.echo('the heading exists');
    }
});

casper.run();