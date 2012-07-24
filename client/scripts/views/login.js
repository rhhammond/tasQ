define([
	'mustache',
	'models/settings',
	'text!../../templates/home.html'
], function(Mustache, settings, template) {
		"use strict";

		var LoginView = Backbone.View.extend({

			//render plugs the JSON data (view) into the parsed mustache html (template)
			render: function() {
				var view = {
					date: new Date().toLocaleDateString()
				};
				var html = Mustache.render(template, view); 
				this.$el.html(html);

				$("#content").append(this.$el);
				return this;
			}

		});

		return LoginView;
});