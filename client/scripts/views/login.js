define([
	'mustache',
	'models/settings',
	'text!../../templates/home.html'
], function(Mustache, settings, template) {
		"use strict";

		var LoginView = Backbone.View.extend({

			//render plugs the JSON data (view) into the parsed mustache HTML (template)
			render: function() {			
				var html = Mustache.render(template); 
				this.$el.html(html);

				$("#content").append(this.$el);
				return this;
			}

		});

		return LoginView;
});