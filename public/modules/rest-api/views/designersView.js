define(
       [     
       'backbone',
       'mustache',
       'modules/rest-api/models/designersModel',
       'text!modules/rest-api/templates/designers.template.mustache',
       ],
       function(Backbone, Mustache, DesignersModel, template) {
        var ENTER_KEY = '13';
        var DesignersView = Backbone.View.extend({
          handleContentEditable: function ( event ) {

            console.log(event.keyCode);
            if(event.keyCode == ENTER_KEY){
            var  modelId = $(event.currentTarget).parent().attr('id'),
            attrToUpdate = $(event.currentTarget).attr('data-index');
            console.log(modelId, attrToUpdate);
            var modelToUpdateOrDelete = new DesignersModel({ id : modelId });
              if(attrToUpdate == 'age'){
                modelToUpdateOrDelete.set({age: $(event.currentTarget).text() });
              };
              if(attrToUpdate == 'name'){
                modelToUpdateOrDelete.set({name: $(event.currentTarget).text() });
              };
              if(attrToUpdate == 'task'){
                modelToUpdateOrDelete.set({task: $(event.currentTarget).text() });
              };
                modelToUpdateOrDelete.save();
            }            


          },
          events: {
            'keypress tr td': 'handleContentEditable',
            'click tr .delete-designer': 'handleDelete',
            'click tr td input':'handleCompleted',
            'click #addDesigner': 'addDesigner',
            'click #navigateToAdd': 'navigateToAdd'
          },
          el:'#myElement',
          template: Mustache.compile(template),
          initialize: function(options) {
            this.App = options.app;
            this.listenTo(this.model, "change", this.render);
            this.$el.addClass('animate-leave'); 
            this.$el.parent().find('#myElementAdd').hide();
            this.$el.show('slow');
          },
          addOne: function(data) {


          },
          navigateToAdd: function(){


            this.App.navigate('designers/add',  {trigger: true} );    

          },
          handleDelete: function(event){
           $(event.currentTarget).parent().parent().addClass('animated bounceOutLeft');
           modelId = $(event.currentTarget).parent().parent().attr('id'),
           modelToUpdateOrDelete = new DesignersModel({ id : modelId });
            //simple remove of an element
            modelToUpdateOrDelete.destroy({});



          },
          handleCompleted: function(evt){
           var  modelId = $(evt.currentTarget).parent().parent().attr('id'),
           attrToUpdate = $(evt.currentTarget).parent().attr('data-index');
           var  modelToUpdateOrDelete = new DesignersModel({ id : modelId });

           if ($(evt.currentTarget).val() == '0'){
            $(evt.currentTarget).val('1');
          } else {
            $(evt.currentTarget).val('0');
          }
          modelToUpdateOrDelete.set({completed: $(evt.currentTarget).attr('value') });
          modelToUpdateOrDelete.save();

        },
        render: function(models) {

          var self = this;
				// Assign models(Array of models) to our designers collection models propertie
				this.collection.models = models;
				this.collection.each( function (model) {
					// render each model within the template
					self.renderTemplateDesigner(model);
					
				});
				// this.$el.append(this.template(objects));
				return this;

			},
			renderTemplateDesigner: function(model){
				//Append the template to our element view aka: #myElement
				this.$el.find('.designersList').append(this.template(model));
			}

			
		});

		//Return an instance of this class
		return DesignersView;

	});