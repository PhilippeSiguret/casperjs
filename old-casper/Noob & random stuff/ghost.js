casper = require('casper').create()

casper.start('http://au.linkedin.com/pub/saul-goodman/42/382/563', function() {

  //The regex is used to remove whitespace
  firstName = @.getHTML('span.given-name').replace /^\s+|\s+$/g, ""
  lastName = @.getHTML('span.family-name').replace /^\s+|\s+$/g, ""
  location = @.getHTML('span.locality').replace /^\s+|\s+$/g, ""
  industry = @.getHTML('dd.industry').replace /^\s+|\s+$/g, ""
  console.log "We got #{firstName} #{lastName}, from #{location} that works in #{industry}"
});
casper.run()