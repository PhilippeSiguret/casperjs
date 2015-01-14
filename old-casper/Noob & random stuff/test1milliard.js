var casper = require("casper").create();

var arrayUrl = ["http://nodejs.org", "http://casperjs.org", "http://meteor.com"];

function displayTitleAndUrl(casper){
    casper.echo('Url : ' + casper.getCurrentUrl());
    casper.echo('Title : ' + casper.getTitle());
    casper.echo('---------------------------');
}

casper.start().each(arrayUrl, function(self, link) {
    self.thenOpen(link, function() {
        displayTitleAndUrl(this);
    });
});

casper.run();