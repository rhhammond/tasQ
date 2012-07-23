define([
	'backbone',
	'models/settings'
	], function(Backbone, settings) {

	var LoginView = Backbone.View.extend({

		render: function() {
			this.$el.append('Hello, World!');

			$("#content").append(this.$el);
			return this;
		}
	});

	return LoginView;
})