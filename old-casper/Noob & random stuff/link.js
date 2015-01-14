casper.start(url, function() {
   // search for 'casperjs' from google form
   console.log("page loaded");
   this.fill('form#login', { 
        session_key: 'philippe@mon-administrateur-informatique.com, 
        session_password:  'recrutop'
    }, true);
});