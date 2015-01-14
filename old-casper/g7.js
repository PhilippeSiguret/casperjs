var casper = require('casper').create({
  verbose: true,
});

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
    console.log('je suis sur la page ' + this.getTitle());
});

//CHANGER DE PAGE POUR ALLER À LA PAGE ENTREPRISE 
casper.thenOpen('https://www.linkedin.com/vsearch/p?f_CC=3232692&trk=rr_connectedness&rsid=3468639261404202213221&openFacets=N,G,CC,SE&f_SE=5,1,2,4&orig=FCTD', function() {
    this.echo('je suis sur la page ' + this.getTitle());
});

// chopper le titre de la page d'arrivée 
casper.then(function() {
    console.log('je suis sur la page de la boite : ' + this.getTitle());
});

// Click the first link in the casperJS page
casper.thenClick('li.next a.page-link', function() {
        //attendre que la page se charge une seconde 
    this.wait(5000, function() {
        //le dire
        this.echo("jai attendu 5 secondes sur la page 2 ");
    });
});

// faire une capture d'écran de la page d'arrivée 
casper.then(function() {
    this.capture('page2-2.png');
            //le dire
        this.echo("je viens de prendre le screenshot page2-2");
});




casper.run();