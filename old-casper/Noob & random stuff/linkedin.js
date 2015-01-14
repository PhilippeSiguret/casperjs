casper.start(url, function() {
   // search for 'casperjs' from google form
   console.log("page loaded");
   this.fill('form#login', { 
        session_key: 'xxxxx, 
        session_password:  'xxxxxx'
    }, true);
});

casper.thenEvaluate(function(){
   console.log("Page Title " + document.title);
   console.log("Your name is " + document.location ); 
});