define(
	[
		'backbone',
		'modules/rest-api/views/designersView'
	],
	function(Backbone, DesignersView) {
		var DesignersModel = Backbone.Model.extend({
			
                  urlRoot : '/designers',
			initialize: function() {
			    this.on( "change", this.handleChanged, this);
				  
			},
			handleChanged: function(model, options){

			},
			parse: function (response){
				
				this.attributes = response[0];
			}
		});



		return DesignersModel;

	});