var links = [];
var casper = require('casper').create();

function getLinks() {
    var links = document.querySelectorAll('h3.r a');
    return Array.prototype.map.call(links, function(e) {
        return e.getAttribute('href');
    });
}
	// aller sur linkedin
casper.start('https://fr.linkedin.com/', function()) {
    	// dire que l'on y est 
       console.log("page loaded");
       // prendre une photo pour fêter ça
       this.capture('google.png');
       //remplir le formulaire trouvé avec le #login
}