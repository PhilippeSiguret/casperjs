//appel de la biliothèque Casper
var casper = require('casper').create();
casper.start('https://www.linkedin.com/uas/login', function() {
    this.fill('#login"';
    	session_key: 'philippe@mon-administrateur-informatique.com', 
        session_password:  'recrutop'
    }, true);

    casper.capture(ourimage.png);

});
casper.run();
