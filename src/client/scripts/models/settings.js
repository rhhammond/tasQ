/*
*	settings.js
*
*	A wrapper that persists application configuration settings to localStorage.
*
*	Properties:
*		- serverURL: tasQ server root URL, used as the base URL for all communication
*		- rememberMe: indicates whether to persist user login information between sessions
*/

define([], function() {
	"use strict";

	//static property list
	var properties = ["serverUrl", "rememberMe"];

	//default values for the properties
	var defaults = {
		serverUrl: "127.0.0.1:8000",
		rememberMe: false
	};

	//key for storing to localStorage
	var id = "tasQ:settings";

	//adds object properties to the prototype so that they can be accessed via dot notation from other modules
	function makeProperty(name) {
		Object.defineProperty(Settings.prototype, name, {
			get: function() {
				return this._data[name];
			},
			set: function(value) {
				this._data[name] = value;
			}
		});
	}

	//Settings object constructor
	function Settings() {
		var settings = localStorage.getItem(id);
		this.data = _.defaults(settings ? JSON.parse(settings) : {}, defaults);

		this.save = function() {
			localStorage.setItem(id, JSON.stringify(this.data));
			return this;
		};

		this.toJSON = function() {
			return this.data;
		};
	}

	//exposes the 'data' property on Settings
	Object.defineProperty(Settings.prototype, "data", {
		get: function() {

			if(!this._data) {
				this._data = {};
			}

			return this._data;
		}
	});

	//create the defined properties
	_.each(properties, makeProperty);

	return new Settings();
});