var casper = require('casper').create({
  pageSettings: {
        loadImages:  false,        // The WebPage instance used by Casper will
        loadPlugins: false         // use these settings
    },
  verbose: true,
  logLevel: "info",
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

//C'est la variable pour choper les noms 

var nom=[];
 //boucle pour chiper tous les noms de la page 
casper.then(function() {
    for (var i=0; i<10; i++) {
        nom = nom.concat([this.getElementInfo('li.mod.result.idx' + i + '.people  div  h3  a')]);
    };
});


//C'est la variable pour choper les jobs des mecs  
var job = [];
 //boucle pour chiper tous les noms de la page 
casper.then(function(){
	for (var i=0; i<10; i++) {
    	job = job.concat([this.getElementInfo('li.mod.result.idx'+i+'.people div p')]);
    };

});

casper.then(function(){
	//le nombre qui est supérieur à i est le nombre de page total avant que le programme ne bug. 
	// il faut mettre le nombre de contact dans l'URL de recherche/10 + 1 
    for (var i = 2; i<14; i++) {

    	//On clique sur la page 
        casper.thenClick('li.next a.page-link',function(){
        
        //attendre que la page se charge une seconde 
            this.wait(5000, function(){
            	//écriture sur le terminal que la page à attendu 
            	console.log('Jai attendu que se charge la page ' + this.getTitle());
					casper.then(function() {
						//Le scrap chipe les noms et prénoms 
  					  	for (var i=0; i<10; i++) {
     				   		nom = nom.concat([this.getElementInfo('li.mod.result.idx' + i + '.people  div  h3  a')]);
  				 	 	};
					});

					//Le scrap chipe les noms et prénoms 
					casper.then(function(){
						for (var i=0; i<10; i++) {
    					job = job.concat([this.getElementInfo('li.mod.result.idx'+i+'.people div p')]);
   					 	};

					});

            });
        });        
    };
});
//écriture des noms
casper.then(function(){
    for (i=0; i<nom.length; i++){
        this.echo(nom[i].text);
    }
});


//écriture des jobs
casper.then(function(){
    for (i=0; i<job.length; i++){
        this.echo(job[i].text);
    }
});



casper.run();