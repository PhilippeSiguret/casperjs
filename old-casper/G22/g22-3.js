var casper = require('casper').create({
  pageSettings: {
        loadImages:  false,        // The WebPage instance used by Casper will
        loadPlugins: false         // use these settings
    },
  verbose: true,
  //logLevel: "info",
});

//Aller sur la page de Linkedin et remplir les identifiants 
casper.start('https://fr.linkedin.com/', function() {
    this.fillSelectors('form#login', { 
    	'input[name="session_key"]': 'philippe@mon-administrateur-informatique.com',
    	'input[name="session_password"]':'recrutop'

    }, true);
});

// chopper le titre de la page d'arrivée 
casper.then(function() {
    console.log(' ÉTAPE 1' + this.getTitle());
});

//C'est ici que l'on met l'URL de la recherche que l'on à effectuée 
casper.thenOpen('https://www.linkedin.com/vsearch/p?f_CC=1058&trk=rr_connectedness&rsid=3468639261404248875929&f_G=fr%3A0&orig=FCTD&openFacets=N,G,CC,FA,SE&f_SE=2,1,3,4,5&f_FA=11&page_num=1&pt=people', function() {
    this.echo(' ÉTAPE 2 ' + this.getTitle());
});

// chopper le titre de la page d'arrivée 
casper.then(function() {
    console.log(' ÉTAPE 3 : ' + this.getTitle());
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

//C'est ici que l'on a créé la boucle pour aller voir toutes les pages les unes après les autres 
casper.then(function(){

    //le nombre qui est supérieur à i est le nombre de page total avant que le programme ne bug. 
    // il faut mettre le ((nombre de contact dans l'URL de recherche)/10) EN NOMBRE ENTIER !.
    // /!\ Il ne faut pas que ça dépasse, car sinon ça plante et ça n'écrit pas les résultats /!\ 
    
    for (var i = 2; i<=2; i++) {

    	//On clique sur le bouton suivant ext de la page 
        casper.thenClick('li.next a.page-link',function(){
        
        //attendre que la page se charge une seconde 
            this.wait(5000, function(){
            	//écriture sur le terminal que la page à attendu 
            	console.log('Jai attendu que se charge la page suivante ');
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