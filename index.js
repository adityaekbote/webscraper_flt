var express = require('express')
var request = require('request');
var cheerio = require('cheerio');
var app = express()

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

var title;

/*
 var title;
 url = 'https://www.google.co.in/search?q=delta+flight+status&oq=delta+flight+status&aqs=chrome.0.69i59j69i57j69i60l4.3575j0j4&sourceid=chrome&ie=UTF-8';
  request(url, function (error, response, body) 
{  
  
  if (!error && response.statusCode == 200) 
  {
    var $ = cheerio.load(body);
    title = $('#rso > div.g.mnr-c.g-blk > div.kp-blk._Z7._Rqb._RJe > div > div._OKe > div:nth-child(2) > div.mod > div > div.knowledge-webanswers_table__webanswers-table > table > tbody > tr:nth-child(2) > td:nth-child(2)').text();
    console.log(title);
  }
})
*/
function getDetails(url){
 request(url , function (error, response, html) {
  if (!error && response.statusCode == 200) {
    var $ = cheerio.load(html);
    title = $('td.smallrow1');
    console.log(title);
    return title;
  }
});
}

app.get('/:flt', function(request, response) {
  var url = "http://uk.flightaware.com/live/flight/"+ req.params.flt;
  var res;
  res = getDetails(url);
  response.send(res);
})



app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
