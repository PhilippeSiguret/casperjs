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
    console.log('XOOO je suis sur la page ' + this.getTitle());
});

//CHANGER DE PAGE POUR ALLER À LA PAGE ENTREPRISE 
casper.thenOpen('https://www.linkedin.com/vsearch/p?f_SE=5,1,2,4&orig=FCTD&rsid=3468639261404233361527&trk=rr_connectedness&openFacets=N,G,CC,SE', function() {
    this.echo('XXOO je suis sur la page ' + this.getTitle());
});

// chopper le titre de la page d'arrivée 
casper.then(function() {
    console.log('XXXO je suis sur la page 1 de la boite : ' + this.getTitle());
});

var nom=[];



casper.then(function() {
 
    for (var i=0; i<10; i++) {
        nom = nom.concat([this.getElementInfo('li.mod.result.idx' + i + '.people  div  h3  a')]);
    };
});

casper.then(function(){
    this.echo(nom.length);
    for (i=0; i<10; i++){
        this.echo(nom[i].text);
    }
});

var job = [];

casper.then(function(){
    job = this.getElementInfo('li.mod.result.idx0.people div p');
    this.echo(job.text);

})




casper.run();