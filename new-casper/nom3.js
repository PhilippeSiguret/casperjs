var casper = require('casper').create({
    verbose: true,
    logLevel: "debug"
});

var links = {
    'http://edition.cnn.com/': 0,
    'http://www.nytimes.com/': 0,
    'http://www.bbc.co.uk/': 0,
    'http://www.guardian.co.uk/': 0
};

casper.countLinks = function() {
    return this.evaluate(function() {
        return __utils__.findAll('a[href]').length;
    });
};

casper.renderJSON = function(what) {
    return this.echo(JSON.stringify(what, null, '  '));
};

casper.start();

casper.each(Object.keys(links), function(casper, link) {
    this.thenOpen(link, function() {
        links[link] = this.countLinks();
    });
});

casper.run(function() {
    this.renderJSON(links).exit();
});