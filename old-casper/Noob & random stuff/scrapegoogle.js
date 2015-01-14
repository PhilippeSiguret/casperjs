var links = [];
var casper = require('casper').create();


function getpagenames(){
var pagenames = document.querySelectorAll('li.st ')
    return Array.prototype.map.call(links, function(e) {
        return e.getAttribute('data-href');
    });
}

casper.start('http://google.fr/', function() {
    // search for 'casperjs' from google form
    this.fill('form[action="/search"]', { q: 'casperjs' }, true);
});

casper.then(function() {
    // aggregate results for the 'casperjs' search
    pagenames = this.evaluate(getpagenames);
});

casper.run(function() {
    // il ajoute le nombre de liens et tout 
    // il ajoute les - devant les liens et ensuite il passe à la ligne 
    this.echo(' - ' + pagenames.join('\n - ')).exit();
});