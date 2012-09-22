var express = require('express');
var app = express();

// initialize application request routes
require('./routes')(app);

app.listen(8000);