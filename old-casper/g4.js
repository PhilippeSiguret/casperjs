var links = [];

var casper = require('casper').create({
  verbose: true,
  logLevel: 'debug',
});

function getLinks() {
    var links = document.querySelectorAll('h3.a');
    return Array.prototype.map.call(links, function(e) {
        return e.getAttribute('href');
    });
}

casper.start('https://fr.linkedin.com/', function() {
    // search for 'casperjs' from linkedin form : //*[@id="session_key-login"]
    //  X Path de google : /html/body/center/form
	// le nom du formulaire action="/search"
    this.fillSelectors('form#login', { 
    	'input[name="session_key"]': 'philippe@mon-administrateur-informatique.com',
    	'input[name="session_password"]':'recrutop'

    }, true);
});

// chopper le titre de la page d'arrivée 
casper.then(function() {
    console.log('le titre de cette page est  ' + this.getTitle());
});

// faire une capture d'écran de la page d'arrivée 
casper.then(function() {
    this.capture('linkedin.png');
});

//CHANGER DE PAGE POUR ALLER À LA PAGE ENTREPRISE 
casper.thenOpen('https://www.linkedin.com/vsearch/p?f_CC=3232692&trk=rr_connectedness&rsid=3468639261404202213221&openFacets=N,G,CC,SE&f_SE=5,1,2,4&orig=FCTD', function() {
    this.echo(this.getTitle());
});

// chopper les liens vers les profils
casper.then(function() {
    links = this.evaluate(getLinks);
}); 



casper.run(function() {
    // echo results in some pretty fashion
    this.echo(links.length + ' links found:');
    this.echo(' - ' + links.join('\n - ')).exit();
});