var casper = require('casper').create({
    verbose: true,
    logLevel: "debug"
});

var links = {
    'https://www.linkedin.com/cap/peopleSearch/resultsWithFacets/686029293?searchController=peopleSearch&linkContext=Controller%3ApeopleSearch%2CAction%3AfacetsAjax%2CID%3A686029293&pos=3&total=28&searchAction=resultsWithFacets&offset=0&max=25&resultsType=search&origin=profile&trackingSearchId=6108fd46-1d6c-41d9-acf8-b8e81967dbe4&searchId=686029293&bcrum1=&searchName=Search': 0,
};

casper.countLinks = function() {
    return this.evaluate(function() {
        return __utils__.findAll('.given-name').length;
    });
};

casper.renderJSON = function(what) {
    return this.echo(JSON.stringify(what, null, '  '));
};

//Aller sur la page de Linkedin et remplir les identifiants 
casper.start('https://fr.linkedin.com/', function() {
    this.fillSelectors('form#login', { 
        'input[name="session_key"]': 'psiguret@recrutop.com',
        'input[name="session_password"]':'recrutop',
 
    }, true);
});

casper.each(Object.keys(links), function(casper, link) {
    this.thenOpen(link, function() {
        links[link] = this.countLinks();
    });
});

casper.run(function() {
    this.renderJSON().exit();
});