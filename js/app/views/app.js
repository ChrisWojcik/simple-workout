define([
	'jquery',
	'underscore',
	'backbone',
	'app/views/exerciseLibrary'
], function($, _, Backbone, ExerciseLibraryView) {
	'use strict';

	var AppView = Backbone.View.extend({
		el: '#main',

		initialize: function() {
			var data = [
				{ name: 'Situps', bodyPart: 'Abs' },
				{ name: 'Pushups', bodyPart: 'Chest, Arms' },
				{ name: 'Hammer Curls', bodyPart: 'Biceps', equipmentNeeded: 'Dumbbells' }
			];

			var exerciseLibraryView = new ExerciseLibraryView(data);
		}
	});

	return AppView;
});