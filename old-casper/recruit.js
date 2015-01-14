var casper = require('casper').create({
  pageSettings: {
        loadImages:  false,        // The WebPage instance used by Casper will
        loadPlugins: false         // use these settings
    },
  verbose: true,
  //logLevel: "info",
  //logLevel:"debug",
});


// ========================================================================================================================
// ========================================================================================================================
// Mettre ses identifiants LinkedIn 
// ========================================================================================================================
// ========================================================================================================================

//Aller sur la page de Linkedin et remplir les identifiants 
casper.start('https://fr.linkedin.com/', function() {
    this.fillSelectors('form#login', { 
    	'input[name="session_key"]': 'psiguret@recrutop.com',
    	'input[name="session_password"]':'recrutop',

    }, true);
});

// chopper le titre de la page d'arrivée 
casper.then(function() {
    console.log(' ÉTAPE 1' + this.getTitle());
});


// ========================================================================================================================
// ========================================================================================================================
//C'est ici que l'on met l'URL de la recherche 
// ========================================================================================================================
// ========================================================================================================================

casper.thenOpen('https://www.linkedin.com/cap/peopleSearch/resultsWithFacets/815900831?resultsType=search&trackingSearchOrigin=COME&expandFacets=true', function() {
    //on chope le nom de la page d'arrivée 
    this.echo(' nom de la page arrivée'  + this.getTitle());
});

//C'est la variable pour choper les noms 
var nom=[];
casper.then(function() {

    for (var i=0; i<1; i++) {
        nom = nom.concat([this.getElementInfo('div.desc div h2 a span span')]);
    };
});



//écriture des noms
casper.then(function(){
    for (i=0; i<nom.length; i++){
        this.echo(nom[i].text);
    }
});

casper.run();