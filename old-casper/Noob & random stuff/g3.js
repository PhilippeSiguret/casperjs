var casper = require('casper').create({
  verbose: true,
  logLevel: 'debug',
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


casper.then(function() {
    console.log('clicked ok, new location is ' + this.getTitle());
});

casper.run();