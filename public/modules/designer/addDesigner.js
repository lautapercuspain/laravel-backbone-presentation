define(
      [     
            'backbone',
            'mustache',
            'modules/rest-api/models/designersModel',
            'app',
            'text!modules/designer/templates/addDesigners.template.mustache',
      ],
      function(Backbone, Mustache, designersModel, App, template) {
          
            var ENTER_KEY = '13';
            var AddDesignersView = Backbone.View.extend({
                  events: {
                        'click #addDesigner': 'addDesigner'
                  },
                  el:'#myElementAdd',
                  template: Mustache.compile(template),
                  initialize: function(options) {
                     this.$el.parent().find('#myElement').hide('slow');
                     this.$el.addClass('animate-leave').show('slow');   
                     this.App = options;

                     return this.render();
                  },
                  addDesigner: function(evt) {
                     evt.preventDefault();
                     var self = this;                    
                     var name = $('#name').val();
                     var age =  $('#age').val();
                     var task = $('#taskName').val();
                  
                     var newDesigner =  new designersModel({
                        name: name,
                        age: age,
                        task: task,
                        completed: false
                     });
                     newDesigner.save();
                  
                     return this.App.navigate('/', {trigger:true});
                   
                  },
                  render: function(models) {
                        //Render the template
                        this.$el.html(this.template());
                        return this;

                  }
                  
            });
            
            //Return an instance of this class
            return AddDesignersView;

      });