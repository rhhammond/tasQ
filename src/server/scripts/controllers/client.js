var path = require('path');

/*
*	clientController.load(req, res)
*
*	Returns index.html to initialize the web client
*/

exports.load = function (req, res){

  "use strict";

  var filepath = path.normalize(__dirname + '/../../../client/index.html');
  res.sendfile(filepath);

};

/*
*	clientController.loadContent(req, res)
*
*	Returns the contents of the file located at req.path
*/

exports.loadContent = function(req, res) {

  "use strict";

  var filepath = path.normalize(__dirname + '/../../../client' + req.path);
  res.sendfile(filepath);

};