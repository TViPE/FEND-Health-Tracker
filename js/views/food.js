var app = app || {};

// Food View
app.FoodView = Backbone.View.extend({
	tagName: 'li',
	template: _.template($('#food-template').html()),
	
	render: function(){
		this.$el.html(this.template(this.model.attributes));
		return this;
	}
});