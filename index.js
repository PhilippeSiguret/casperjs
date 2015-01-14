var casper = require('casper').create({
  verbose: true,
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
	for (var i=0; i<10; i++) {
    	job = job.concat([this.getElementInfo('li.mod.result.idx'+i+'.people div div.description')]);
    };

});
casper.then(function(){
    this.echo(job.length);
    for (i=0; i<10; i++){
        this.echo(job[i].text);
    }
});


casper.then(function(){
    var j = 2;
    for (var i = 2; i<14; i++) {
        casper.thenClick('li.next a.page-link',function(){
        //attendre que la page se charge une seconde 
            this.wait(5000, function(){
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
	for (var i=0; i<10; i++) {
    	job = job.concat([this.getElementInfo('li.mod.result.idx'+i+'.people div p')]);
    };

});
casper.then(function(){
    this.echo(job.length);
    for (i=0; i<10; i++){
        this.echo(job[i].text);
    }
});

                j++;
            });
        });        
    };
});



casper.run();