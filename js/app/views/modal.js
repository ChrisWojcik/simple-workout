define([
	'jquery',
	'underscore',
	'backbone',
	'app/templates',
	'bootstrap'
], function($, _, Backbone, Templates) {

	'use strict';

	var ModalView = Backbone.View.extend({

		className: 'modal fade',
		template: Templates.Modal,

		events: {

		},

		initialize: function(options) {
			var appendTo = options.appendTo || 'body';
			this.$el.html( this.template({ title: options.title }) );
			this.$contentEl = this.$('.modal-content');
			$(appendTo).append(this.el);
		},

		render: function() {
			this.$modalEl.modal({ show: false, keyboard: false });
			return this;
		}, 

		show: function() {
			var that = this;

			that.$el.modal('show');
			that.$el.on('hidden.bs.modal', function() {
				that.onModalHidden();
			});
		}, 

		onModalHidden: function(e) {
			this.$el.off('hidden.bs.modal');
			this.remove();
		}
	});

	return ModalView;
});