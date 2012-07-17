//require.js configuration - http://requirejs.org/docs/api.html#config
require.config({

	baseUrl: 'scripts',
	
	paths: {

		//CDN hosted jQuery
		jquery: 'http://code.jquery.com/jquery-1.7.2.min',
		
		bootstrap: '../lib/bootstrap/js/bootstrap',
		dropdown: '../lib/bootstrap/js/bootstrap-dropdown',
		//underscore: '../lib/underscore-amd',
		//backbone: '../lib/backbone-amd'
	}

});

//use require.define() to declare module dependencies
define([
	'jquery',
	//'bootstrap',
	//'dropdown'

], function($) {

	//TODO: bootstrap the application here
	$("#content").show();

});