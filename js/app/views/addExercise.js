define([
	'jquery',
	'underscore',
	'backbone',
	'app/templates',
	'app/models/exercise',
	'app/views/modal'
], function($, _, Backbone, Templates, ExerciseModel, ModalView) {

	'use strict';

	var AddExerciseView = ModalView.extend({

		id: 'modal-add-exercise',

		events: {
			'submit #addExercise': 'onSubmit'
		},

		html: [
			'<div class="modal-body">',
				'<form id="addExercise" role="form">',
  					'<div class="form-group">',
    					'<label for="addExercise-name">Name:</label>',
                        '<input name="addExercise-name" id="addExercise-name" class="form-control" type="text" />',
  					'</div>',
  					'<div class="form-group">',
    					'<label for="addExercise-bodyPart">Target Body Part:</label>',
                        '<input name="addExercise-bodyPart" id="addExercise-bodyPart" class="form-control" type="text" />',
  					'</div>',
  					'<div class="form-group">',
    					'<label for="addExercise-equipmentNeeded">Equipment Needed:</label>',
                        '<input name="addExercise-equipmentNeeded" id="addExercise-equipmentNeeded" class="form-control" type="text" />',
  					'</div>',
  					'<div class="form-actions">',
    					'<button type="button" class="btn btn-default" data-dismiss="modal">Cancel</button>',
    					'<input id="addExercise-submit" type="submit" class="btn btn-primary" value="Save" />',
    				'</div>',
    			'</form>',
    		'</div>'
		].join(''),

		initialize: function() {
			ModalView.prototype.initialize.call(this, { title: 'New Exercise' });
			this.$contentEl.append(this.html);
		},

		onSubmit: function(e) {
			e.preventDefault();
			
			var data = {};

			$('#addExercise').find('input[type="text"]').each(function(i, el) {
				if ( $(el).val() !== '' ) {
					var field = el.id.split('-')[1];
					data[field] = $(el).val();
					$(el).val('');
				}
			});

			this.collection.add( new ExerciseModel(data) );
			this.$el.modal('hide');
		}
	});

	return AddExerciseView;
});