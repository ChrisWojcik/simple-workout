define([
	'jquery',
	'underscore',
	'backbone',
	'app/templates'
], function($, _, Backbone, Templates) {
	'use strict';

	var ExerciseLibraryItemView = Backbone.View.extend({
		tagName: 'li',
		className: 'list-group-item exercise-item clearfix',
		template: Templates.ExerciseLibraryItem,

		events: {
			'click .delete': 'deleteExercise'
		},

		render: function() {
			this.$el.html( this.template( this.model.toJSON() ) );
			return this;
		},

		deleteExercise: function() {
			this.model.destroy();
			this.remove();
		}
	});

	return ExerciseLibraryItemView;
});