var app = app || {};

// Todo collection
var FoodCollection = Backbone.Collection.extend({
	model: app.Food,

	localStorage: new Backbone.LocalStorage('foodStorage'),

	clearAllFoodItems: function(){
		_.invoke(tasks.toArray(), 'destroy');
	},
});

app.FoodCollection = new FoodCollection();

