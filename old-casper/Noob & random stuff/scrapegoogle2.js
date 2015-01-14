var links = [];
var casper = require('casper').create();

function getLinks() {
    var links = document.querySelectorAll('h3.r a');
    return Array.prototype.map.call(links, function(e) {
        return e.getAttribute('href');
    });
}

casper.start('https://www.google.fr/webhp?sourceid=chrome-instant&ion=1&espv=2&es_th=1&ie=UTF-8#newwindow=1&q=casperjs', function() {
    links = this.evaluate(getLinks);
});

casper.run(function() {
    // echo results in some pretty fashion
    this.echo(links.length + ' links found:');
    this.echo(' - ' + links.join('\n - ')).exit();
});