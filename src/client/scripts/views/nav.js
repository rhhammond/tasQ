define([
	'jquery',
	'../models/loginModel',
	'text!../../templates/nav.html',
	'text!../../templates/home.html'
], function($, loginModel, navHtml, homeHtml) {

	"use strict";

	var NavView = Backbone.View.extend({

		events: {
			'click :submit' : 'login'
		},

		login: function() {
			var p = loginModel.login($("#id_username").val(), $("#id_password").val());
		},

		render: function() {
			this.$el.html(navHtml);
			$(document.body).append(this.$el);

			// @todo: only show homeHtml when user is not logged in
			$(document.body).append(homeHtml);

			return this;
		}
	});

	return NavView;
});