define(
	[
		'backbone',
		'modules/rest-api/models/designersModel'
	],
	function(Backbone, designModel) {
		var DesignersCollection = Backbone.Collection.extend({
			url: '/designers', //traer este valor desde la configuracion
			initialize: function() {
				this.on('change', this.fetch, this);
			},
			parse: function(response){

				// console.log(response);
			}
		});



		return DesignersCollection;

	});