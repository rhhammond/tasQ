define([
	'jquery',
	'models/settings'
], function($, settings) {

	"use strict";

	var LoginModel = Backbone.Model.extend({

		urlRoot: settings.serverUrl,

		//todo: specific auth route on server
		//url:

		login: function(username, password) {

			var options = {
				success: function(model, response) {
					if(settings.rememberMe) {
						// todo: save some auth information here
					}
				}
			};
			//todo: use the username and password
			this.save(null, options);
		}
	});

	return new LoginModel();
});