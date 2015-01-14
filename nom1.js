var casper = require('casper').create({
  pageSettings: {
        //loadImages:  false,        // The WebPage instance used by Casper will
        //loadPlugins: false         // use these settings
    },
  verbose: true,
  logLevel: "debug",
});
 
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
 
//C'est ici que l'on met l'URL de la recherche que l'on à effectuée 
casper.thenOpen('https://www.linkedin.com/cap/peopleSearch/resultsWithFacets/686029293?searchController=peopleSearch&linkContext=Controller%3ApeopleSearch%2CAction%3AfacetsAjax%2CID%3A686029293&pos=3&total=28&searchAction=resultsWithFacets&offset=0&max=25&resultsType=search&origin=profile&trackingSearchId=6108fd46-1d6c-41d9-acf8-b8e81967dbe4&searchId=686029293&bcrum1=&searchName=Search', function() {
    this.echo(' ÉTAPE 2 ' + this.getTitle());
});

casper.then(function() {
    if (this.exists('.given-name')) {
        this.echo('the given-name  exists');
    }
});

casper.run();