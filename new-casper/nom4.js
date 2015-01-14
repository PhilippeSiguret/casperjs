var links;
casper.start('http://www.google.com', function() {
    links = this.evaluate(function() {
        var elements = __utils__.findAll('a');
        return Array.prototype.map.call(elements, function(e) {
            return e.getAttribute('href');
        });
    });
});

casper.run(function() {
    this.echo(JSON.stringify(links)).exit();
});