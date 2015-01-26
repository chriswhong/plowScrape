


var request = require('request')
	fs = require('fs'),
	express = require('express');

var app = express();
app.use(express.static(__dirname + '/public'));

var snowPlowEndpoint = 'http://maps.nyc.gov/geoserver/wfs?request=GetFeature&version=1.1.1&typeName=public:SNW_PLOWED&outputFormat=application/json'

request(snowPlowEndpoint, function (error, response, body) {
  if (!error && response.statusCode == 200) {
  	var timestamp = new Date().getTime().toString();
    fs.writeFile('public/data/' + timestamp + '.json', JSON.stringify(body), function(err) {
    	console.log(err);
  	});
  }
})