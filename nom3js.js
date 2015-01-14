var links;
casper.start('http://www.google.com/', function() {
    links = this.evaluate(function() {
        var elements = __utils__.findAll('a');
        return elements.map(function(e) {
            return e.getAttribute('class');
        });
    });
});

casper.run(function() {
    this.echo(JSON.stringify(links)).exit();
});