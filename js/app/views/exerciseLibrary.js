define([
	'jquery',
	'underscore',
	'backbone',
	'app/collections/exercises',
	'app/models/exercise',
	'app/views/exerciseLibraryItem',
	'app/views/addExercise'
], function($, _, Backbone, 
			ExercisesCollection, ExerciseModel, 
			ExerciseLibraryItemView, AddExerciseView) {

	'use strict';

	var ExerciseLibraryView = Backbone.View.extend({
		el: '#exercise-library',

		events: {
			'click #add-exercise': 'addExercise'
		},

		initialize: function(data) {
			this.collection = new ExercisesCollection(data);
			this.render();

			this.listenTo( this.collection, 'add', this.renderExercise );
		},

		render: function() {
			var that = this;

			that.collection.each(function(item) {
				that.renderExercise(item);
			});
		},

		renderExercise: function(item) {
			var exerciseLibraryItemView = new ExerciseLibraryItemView({ model: item });
			$('#exercise-list').append( exerciseLibraryItemView.render().el );
		},

		addExercise: function() {
			var modal = new AddExerciseView({ collection: this.collection });
			modal.show();
		}
	});

	return ExerciseLibraryView;
});