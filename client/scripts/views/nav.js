define([
	'jquery',
	'text!../../templates/nav.html',
	'text!../../templates/home.html'
], function($, navHtml, homeHtml) {
	"use strict";

	var NavView = Backbone.View.extend({

		render: function() {
			this.$el.html(navHtml);
			$(document.body).append(this.$el);

			//todo: only show homeHtml when user is not logged in
			$(document.body).append(homeHtml);

			return this;
		}
	});

	return NavView;
});