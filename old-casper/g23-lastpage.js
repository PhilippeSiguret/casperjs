var casper = require('casper').create({
  pageSettings: {
        loadImages:  false,        // The WebPage instance used by Casper will
        loadPlugins: false         // use these settings
    },
  verbose: true,
  logLevel: "info",
});

//Aller sur la page de Linkedin et remplir les identifiants 
casper.start('https://fr.linkedin.com/', function() {
    this.fillSelectors('form#login', { 
    	'input[name="session_key"]': '1test.recrutop@gmail.com',
    	'input[name="session_password"]':'recrutop'

    }, true);
});

// chopper le titre de la page d'arrivée 
casper.then(function() {
    console.log(' ÉTAPE 1' + this.getTitle());
});

//C'est ici que l'on met l'URL de la recherche que l'on à effectuée 
//  /!\ ATTENTION ICI C'EST UNE RECHERCHE POUR UNE PAGE UNIQUE, DONC NE METTRE QUE L'URL DE LA DERNIÈRE PAGE DE RECHERCHE /!\
casper.thenOpen('https://www.linkedin.com/vsearch/p?f_CC=5213490&trk=rr_connectedness', function() {
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
        nom = nom.concat([this.getElementInfo('li.mod.result.idx' + i + '.people  div  h3  a')]);
    };
});


//C'est la variable pour choper les jobs des mecs  
var job = [];
 //boucle pour chiper tous les noms de la page 
  // /!\ BIEN PENSER À CHANGER i<(NOMBRE DE PERSONNES SUR LA PAGE) SINON ÇA BEUG /!\
casper.then(function(){
	for (var i=0; i<4; i++) {
    	job = job.concat([this.getElementInfo('li.mod.result.idx'+i+'.people div p')]);
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