var links = [];
var casper = require('casper').create();

function getLinks() {
    var links = document.querySelectorAll('h3.r a');
    return Array.prototype.map.call(links, function(e) {
        return e.getAttribute('href');
    });
}

casper.start('https://fr.linkedin.com/', function() {
    // search for 'casperjs' from google form
       console.log("page loaded");
       this.capture('google.png');
       console.log("capture effectuée bro!")

    this.fill('form#login
    	session_key-login', { q: 'linkedin' }, true);
});
console.log("c'est bon on a rentré du texte")
casper.then(function() {
    // aggregate results for the 'casperjs' search
    links = this.evaluate(getLinks);
});

    casper.then(function() {
    // aggregate results for the 'phantomjs' search
    links = links.concat(this.evaluate(getLinks));
});

    casper.run(function() {
    // echo results in some pretty fashion
    this.echo(links.length + ' links found:');
    this.echo(' - ' + links.join('\n - ')).exit();
});