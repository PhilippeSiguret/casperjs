var casper = require('casper').create({
  pageSettings: {
        loadImages:  false,        // The WebPage instance used by Casper will
        loadPlugins: false         // use these settings
    },
  verbose: true,
  //logLevel: "debug",
});


// ========================================================================================================================
// ========================================================================================================================
// Mettre ses identifiants LinkedIn 
// ========================================================================================================================
// ========================================================================================================================

//Aller sur la page de Linkedin et remplir les identifiants 
casper.start('https://fr.linkedin.com/', function() {
    this.fillSelectors('form#login', { 
    	'input[name="session_key"]': 'p.siguret@gmail.com',
    	'input[name="session_password"]':'^=.u@)2E+iZ[kWEF]U|y&LJV]',

    }, true);
});

// chopper le titre de la page d'arrivée 
casper.then(function() {
    console.log(' ÉTAPE 1' + this.getTitle());
});


// ========================================================================================================================
// ========================================================================================================================
//C'est ici que l'on met l'URL de la 1ère recherche à choper, qui aura plusieurs lignes  
// ========================================================================================================================
// ========================================================================================================================

casper.thenOpen('https://www.linkedin.com/vsearch/p?f_CC=1343', function() {
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

// ========================================================================================================================
// ========================================================================================================================
    //le nombre qui est supérieur à i est le nombre de page total avant que le programme ne bug. 
    // il faut mettre le ((nombre de contact dans l'URL de recherche)/10) EN NOMBRE ENTIER !.
    // /!\ Il ne faut pas que ça dépasse, car sinon ça plante et ça n'écrit pas les résultats /!\ 
    // le compte premium est limité à 700 personnes dans une recherche 
// ========================================================================================================================
// ========================================================================================================================

    for (var i = 2; i<=38; i++) {

// ========================================================================================================================
    	//On clique sur le bouton suivant ext de la page 
        casper.thenClick('li.next a.page-link',function(){

        //attendre que la page se charge une seconde 
            this.wait(5000, function(){
            	//écriture sur le terminal que la page à attendu 
            	console.log('=======================================');
                console.log('                                       ');
                console.log('              ¯\_(ツ)_/¯               ');
                console.log('                                       ');
                console.log('Et on attends que ça charge... ');
                console.log('                                       ');

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


// ========================================================================================================================
// ========================================================================================================================
// Mettre l'URL d'une page Unique de recherche (par exemple la dernière page de la recherche )
// ========================================================================================================================
// ========================================================================================================================

casper.thenOpen('https://www.linkedin.com/vsearch/p?f_CC=2773271&trk=rr_connectedness&rsid=898447131404317250009&openFacets=N,G,CC&page_num=2&pt=people', function() {
    console.log(' On est sur la dernière page de la recherche : ' + this.getTitle());
});

//C'est la variable pour choper les noms 
var nom=[];
 //boucle pour chiper tous les noms de la page 
casper.then(function() {

 // ========================================================================================================================
// ========================================================================================================================
 // /!\ BIEN PENSER À CHANGER i<(NOMBRE DE PERSONNES SUR LA PAGE - 1 car ça commence à 0) SINON ÇA BEUG /!\
    for (var i=0; i<5; i++) {
// ========================================================================================================================
// ========================================================================================================================

        nom = nom.concat([this.getElementInfo('li.mod.result.idx' + i + '.people  div  h3  a')]);
    };
});


//C'est la variable pour choper les jobs des mecs  
var job = [];
 //boucle pour chiper tous les noms de la page 
casper.then(function() {

// ========================================================================================================================
// ========================================================================================================================
  // /!\ BIEN PENSER À CHANGER i<(NOMBRE DE PERSONNES SUR LA PAGE - 1 car ça commence à 0) SINON ÇA BEUG /!\
    for (var i=0; i<2; i++) {
// ========================================================================================================================
// ========================================================================================================================

        job = job.concat([this.getElementInfo('li.mod.result.idx'+i+'.people div p')]);
    };
});



//petite séparation

casper.then(function(){
    console.log('==========================================================================')
    console.log(' ') 
    console.log(' Et voici les noms et prénoms   ! ')
    console.log(' ') 
    console.log('==========================================================================')

})


//écriture des noms
casper.then(function(){
    for (i=0; i<nom.length; i++){
        this.echo(nom[i].text);
    }
});


//petite séparation
casper.then(function(){
   console.log('==========================================================================')
    console.log(' ') 
    console.log(' Et voici les jobs   ! ')
    console.log(' ') 
    console.log('==========================================================================')
})


//écriture des jobs
casper.then(function(){
    for (i=0; i<job.length; i++){
        this.echo(job[i].text);
    }
});

//petite séparation
casper.then(function(){
    console.log('==========================================================================')
    console.log(' ')
    console.log(' ') 
    console.log('ÇA A FONCTIONNÉ !  \(ˆ˚ˆ)/ YIPEEEEEEE')
    console.log(' ')
    console.log(' ')
    console.log(' ')
    console.log(' ')
});



casper.run();