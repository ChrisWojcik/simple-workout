define([
	'backbone'
], function(Backbone) {
	'use strict';

	var ExerciseModel = Backbone.Model.extend({
		
		defaults: {
			'name': 'Name Here',
			'bodyPart': '',
			'equipmentNeeded': 'None'
		}
	});

	return ExerciseModel;
});