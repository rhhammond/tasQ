
var express = require('express');
var app = express();

// @todo: organize express.js routes better
// http://stackoverflow.com/questions/5055853/how-do-you-modularize-node-js-w-express

app.get('/', function( req, res){

  "use strict";

  var path = require("path").normalize(__dirname + '/../../client/index.html');
  // res.write(path);
  // res.end();
  res.sendfile(path);
});

app.get('/Login', function (req, res) {

  "use strict";

  res.writeHead(200, {'Content-Type': 'application/json'});
  var userToken = 'xxxxxxxx-xxxx-xxxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
    return v.toString(16);
  });

  var response =
	{
		login_response:
		{
			valid: true,
			userToken: userToken
		}
	};

  res.write(JSON.stringify(response));
  res.end();
});

app.listen(8000);