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

			this.set({
				username: username,
				password: password
			});

			return this.fetch(options);
		}
	});

	return new LoginModel();
});