var casper = require('casper').create({
  verbose: true,
});

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
});
// faire une capture d'écran de la page d'arrivée 
casper.then(function() {
    this.capture('page1.png');
            //le dire
        this.echo("je viens de prendre le screenshot page1-1");
});


casper.then(function(){
    for (var i = 2; i<60; i++) {
            this.echo(i);
            casper.thenClick('li.next a.page-link', function() {
        //attendre que la page se charge une seconde 
                this.wait(10000, function() {
        //le dire
                    this.echo("jai attendu 5 secondes pour attendre que la page" + i + "se charge");
                });
                this.capture('page'+i+'.png');
            //le dire
                this.echo("je viens de prendre le screenshot page" + i);


    });
    };
    this.echo('ca use les souliers')

});

casper.run();