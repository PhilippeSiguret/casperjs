var links = [];
var casper = require('casper').create({
  verbose: true,
});

function getLinks() {
    var links = document.querySelectorAll('h3. a');
    return Array.prototype.map.call(links, function(e) {
        return e.getAttribute('href');
    });
}

casper.start('https://fr.linkedin.com/', function() {
    // search for 'casperjs' from linkedin form : //*[@id="session_key-login"]
    //  X Path de google : /html/body/center/form
	// le nom du formulaire action="/search"
    this.fillSelectors('form#login', { 
    	'input[name="session_key"]': '1test.recrutop@gmail.com',
    	'input[name="session_password"]':'recrutop'

    }, true);
});

// chopper le titre de la page d'arrivée 
casper.then(function() {
    console.log('je suis sur la page ' + this.getTitle());
});

//CHANGER DE PAGE POUR ALLER À LA PAGE ENTREPRISE 
casper.thenOpen('https://www.linkedin.com/vsearch/p?f_CC=3232692&trk=rr_connectedness&rsid=3468639261404202213221&openFacets=N,G,CC,SE&f_SE=5,1,2,4&orig=FCTD', function() {
    this.echo('je suis sur la page ' + this.getTitle());
});

// chopper le titre de la page d'arrivée 
casper.then(function() {
    console.log('je suis sur la page 1 de la boite : ' + this.getTitle());
    //chopper les liens h3 a de la page 
});
casper.then(function() {
        links = this.evaluate(getLinks);


casper.run(function() {
    // echo results in some pretty fashion
    this.echo(links.length + ' links found:');
    this.echo(' - ' + links.join('\n - ')).exit();
});