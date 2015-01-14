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
    console.log(' on est connecté! ' + this.getTitle());
});


// ========================================================================================================================
// ========================================================================================================================
// URL de la recherche 
// ========================================================================================================================
// ========================================================================================================================

casper.thenOpen('https://www.linkedin.com/cap/peopleSearch/resultsWithFacets/815900831?resultsType=search&trackingSearchOrigin=COME&expandFacets=true', function() {
    this.echo(' titre de la page ==> ' + this.getTitle());
});


casper.then(function() {

    require('utils').dump(this.getElementsAttribute('div.desc div h2 a span span', 'given-name')); // "['Google']
});


casper.run();