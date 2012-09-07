define([
	'jquery'
	// 'settings'
], function($, settings) {

	"use strict";

	var LoginModel = Backbone.Model.extend({

		urlRoot: settings.serverUrl,

		//todo: specific auth route on server
		//url:

		login: function(username, password) {

			var options = {
				success: function(model, response) {
					// if(settings.rememberMe) {
					// 	// todo: save some auth information here
					// }
				}
			};

			this.save({
				username: username,
				password: password
			}, options);
		}
	});

	return new LoginModel();
});