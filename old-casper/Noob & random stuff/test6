casper = require('casper').create()
fs = require('fs')

url = 'http://www.linkedin.com/pub/gustavo-fring/61/6a/281'
suspects = []

#We start with Gus
casper.start url, ()->
  links = @.getElementsAttribute("strong > a", 'href')
  getAssociate(link, @) for link in links

#We run the job, then we write to file
casper.run ->
  html = '<table><tr><td>Mugshot</td><td>Name</td><td>Location</td><td>Industry</td></tr>'
  html = (html + generateRow(suspect)) for suspect in suspects
  html += '</table>'
  fs.write 'suspect.html', html, 'w'
  @echo("\nexecution terminated\n").exit()

#helper function to generate a row
generateRow = (suspect)->
  data = """
    <tr>
      <td>
        <img src="#{suspect.lastName}.png">
      </td>
      <td>#{suspect.firstName} #{suspect.lastName}</td>
      <td>#{suspect.location}</td>
      <td>#{suspect.industry}</td>
    </tr>
  """

#helper function, grabs all the associate links in the page
getAssociate = (link, doc) ->
  casper.thenOpen link, =>
    associate = getContactInfo(doc)
    suspects.push associate

#helper function, takes a picture and creates a JS object with extracted data
getContactInfo = (doc)->
  contact = 
    firstName: doc.getHTML('span.given-name').replace /^\s+|\s+$/g, ""
    lastName: doc.getHTML('span.family-name').replace /^\s+|\s+$/g, ""
    location: doc.getHTML('span.locality').replace /^\s+|\s+$/g, ""
    industry: doc.getHTML('dd.industry').replace /^\s+|\s+$/g, ""
  doc.captureSelector "#{contact.lastName}.png", 'div.image.zoomable > img.photo'
  contact