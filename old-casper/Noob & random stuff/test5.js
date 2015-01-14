casper.start(url, function() {
   // search for 'casperjs' from google form
	var url = 'https://www.linkedin.com/';
   console.log("page loaded");
   this.fill('form#login', { 
        session_key: 'philippe@mon-administrateur-informatique.com', 
        session_password:  'recrutop'
    }, true);
});

casper.thenEvaluate(function(){
   console.log("Page Title " + document.title);
   console.log("Your name is " + document.location ); 
});
