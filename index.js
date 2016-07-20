var express = require('express')
var request = require('request');
var cheerio = require('cheerio');
var app = express()


app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

 url = 'https://www.google.co.in/search?q=dl1162';
  request(url, function (error, response, body) 
{  
  
  if (!error && response.statusCode == 200) 
  {
    var $ = cheerio.load(body);
    var title = $("#rso > div.g.tpo.knavi.obcontainer.mod > div > div.card-section.vk_c > ol > li > div > span").text();
  }
})

app.get('/', function(request, response) {
  
  response.send(title);
})



app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
