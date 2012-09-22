// This module hooks HTTP requests up to corresponding controller functions

module.exports = function(app) {

	"use strict";

	// Client content requests

	var clientController = require('./controllers/client');
	app.get('/', clientController.load);
	app.get(/\/[css\/.*|scripts\/.*|templates\/.*]/, clientController.loadContent);

	// Login / Authentication requests

	var loginController = require('./controllers/login');
	app.post('/Login', loginController.doLogin);

};