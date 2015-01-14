var casper = require('casper').create();

//On se rend sur Google.fr
casper.start('http://www.google.fr/', function() {
    //Test 1 : Le title de la page est t il Google
    this.test.assertTitle('Google', 'google homepage title is the one expected');

    //Test 2 : La page contient elle le formulaire de recherche ?
    this.test.assertExists('form[action="/search"]', 'main form is found');

    //On effectue une recherche Google sur le mot clé foo
    this.fill('form[action="/search"]', {
        q: 'foo'
    }, true);
});