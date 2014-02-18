define([
	'underscore'
], function(_) {

	'use strict';

	_.templateSettings.interpolate = /\{\{(.*?)\}\}/g;

	var Templates = {};

	Templates.Modal = [
		'<div class="modal-dialog">',
    		'<div class="modal-content">',
    			'<div class="modal-header">',
					'<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>',
					'<h4 class="modal-title">{{ title }}</h4>',
  				'</div>',
    		'</div>',
  		'</div>'
	].join('');

	Templates.ExerciseLibraryItem = [
		'<div class="list-item-info">',
            '<h3 class="list-group-item-heading">{{ name }}</h3>',
            '<p class="list-group-item-text secondary-text">{{ bodyPart }}</p>',
        '</div>',
        '<div class="list-item-actions">',
            '<button class="btn btn-default delete">',
            	'<span class="glyphicon glyphicon-remove"></span>',
            '</button>',
        '</div>'
	].join('');

	for (var temp in Templates) {
		if (Templates.hasOwnProperty(temp)) {
			Templates[temp] = _.template(Templates[temp]);
		}
	}

	return Templates;
});