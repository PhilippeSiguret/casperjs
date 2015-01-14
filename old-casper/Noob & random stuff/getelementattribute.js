var casper = require('casper').create();

casper.start('http://www.google.fr/', function() {
    require('utils').dump(this.getElementAttribute('div[title="Google"]', 'title')); // "Google"
});

casper.run();