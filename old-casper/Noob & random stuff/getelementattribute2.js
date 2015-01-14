casper.start('http://www.google.fr/', function() {
    this.echo(this.getHTML());
});

casper.run();