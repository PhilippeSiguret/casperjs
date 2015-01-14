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
//  /!\ ATTENTION ICI C'EST UNE RECHERCHE POUR UNE PAGE UNIQUE, DONC NE METTRE QUE L'URL DE LA DERNIÈRE PAGE DE RECHERCHE /!\
casper.thenOpen('https://www.linkedin.com/cap/peopleSearch/resultsWithFacets/813611001?resultsType=search&trackingSearchOrigin=GHDS&expandFacets=true#facets=savedSearchId%3D%26searchHistoryId%3D813611001%26savedSearchName%3D%26resultsType%3Dsearch%26sortCriteriaCode%3DR%26internalCandidatesOnly%3Dfalse%26keywords%3Dalcatel%2520lucent%2520%26firstName%3D%26lastName%3D%26jobTitle%3D%26company%3D%26school%3D%26userSearchId%3D%26locationType%3DANY%26facet.G%3Dfr%253A0%26openFacets%3DCC%252CG%252CI', function() {
    this.echo(' ÉTAPE 2 ' + this.getTitle());
});

// chopper le titre de la page d'arrivée 
casper.then(function() {
    console.log(' ÉTAPE 3 : ' + this.getTitle());
});

//C'est la variable pour choper les noms 

var nom=[];
 //boucle pour chiper tous les noms de la page 
 // /!\ BIEN PENSER À CHANGER i<(NOMBRE DE PERSONNES SUR LA PAGE) SINON ÇA BEUG /!\
casper.then(function() {
    for (var i=0; i<4; i++) {
        nom = nom.concat([this.getElementsInfo('h2.a given-name')]);
    };
});

//petite séparation
casper.then(function(){
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
})


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