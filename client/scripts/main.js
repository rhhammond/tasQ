// require.js configuration - http://requirejs.org/docs/api.html#config
require.config({

	baseUrl: 'scripts',
	
	paths: {

		//CDN hosted jQuery
		jquery: 'http://code.jquery.com/jquery-1.7.2.min',
		
		bootstrap: '../lib/bootstrap/js/bootstrap',
		dropdown: '../lib/bootstrap/js/bootstrap-dropdown',
		underscore: '../lib/underscore',
		backbone: '../lib/backbone'
	},

	// shim section specifies any dependencies that must be loaded before these modules can be loaded
	// http://requirejs.org/docs/api.html#config-shim
	shim: {
		
		bootstrap: ['jquery'],
		
		dropdown: ['bootstrap'],
		
		backbone: { 
			deps: ['underscore', 'jquery'],
			exports: 'Backbone'
		},

		underscore: {
			exports: "_"
		}
	}

});

// use require.define() to declare module dependencies
define([
	'jquery',
	'bootstrap',
	'dropdown',
	'views/login'

], function($, bootstrap, dropdown, LoginView) {
	"use strict";

	var view = new LoginView();
	view.render();
	$('.dropdown-toggle').dropdown()
});