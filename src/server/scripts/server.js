
var express = require('express');
var app = express();

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