define([
	'jquery',
	'models/settings'
], function($, settings) {

	"use strict";

	var LoginModel = Backbone.Model.extend({

		urlRoot: '/Login',

		login: function(username, password) {

			var options = {
				success: function(model, response) {
					if(settings.rememberMe) {
						// @todo: save some auth information here
					}
				}
			};
			//todo: use the username and password
			this.save({
				username: username,
				password: password
			}, options);
		}
	});

	return new LoginModel();
});