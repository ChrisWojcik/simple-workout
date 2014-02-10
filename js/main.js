require.config({

	paths: {
		'jquery': 'libs/jquery-1.10.1',
		'underscore': 'libs/underscore',
		'backbone': 'libs/backbone',
		'bootstrap': 'libs/bootstrap'
	},

	shim: {
		'underscore': {
			exports: '_'
		},
		'backbone': {
			deps: [
				'underscore',
				'jquery'
			],
			exports: 'Backbone'
		},
		'bootstrap': {
			deps: [
				'jquery'
			]
		}
	},

	urlArgs: "bust="+(new Date()).getTime()

});

require([
	'backbone',
	'app/app'
], function (Backbone, App) {
	'use strict';

	App.init();
});