// require.js configuration http://requirejs.org/docs/api.html#config
require.config({

	baseUrl: 'scripts',

	paths: {

		// minified jQuery 1.7.2
		jquery: 'lib/jquery-1.7.2.min',

		// require.js text plugin will read a file into a module parameter
		// format: text!<file path relative to baseUrl>
		text: 'lib/text',

		// twitter bootstrap javascript
		bootstrap: 'lib/bootstrap/js/bootstrap',

		// twitter bootstrap dropdown plugin
		dropdown: 'lib/bootstrap/js/bootstrap-dropdown',

		//twitter bootstrap modal plugin
		modal: 'lib/bootstrap/js/bootstrap-modal',

		// underscore.js utilitiy library
		underscore: 'lib/underscore',

		// backbone.js client side MVC library
		backbone: 'lib/backbone',

		// mustache.js template engine
		mustache: 'lib/mustache'
	},

	// shim section specifies any dependencies that must be loaded before these modules can be loaded
	// http://requirejs.org/docs/api.html#config-shim
	shim: {

		bootstrap: {
			deps: ['jquery'],
			exports: 'Bootstrap'
		},

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
// shim registers backbone and underscore globally, so only need to define it once
define([
	'jquery',
	'bootstrap',
	'dropdown',
	'backbone',
	'views/nav'

], function($, bootstrap, dropdown, backbone, NavView) {
	"use strict";

	new NavView().render();
});