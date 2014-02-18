define([
	'backbone',
	'app/models/exercise'
], function(Backbone, ExerciseModel) {
	'use strict';

	var ExercisesCollection = Backbone.Collection.extend({
		model: ExerciseModel
	});

	return ExercisesCollection;
});