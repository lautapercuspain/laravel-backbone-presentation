var App = {};
require(
    [
     'backbone',
     'i18n',
     'configHandler'
    ],
    function(Backbone, i18n, configHandler) {
        
        App = new (Backbone.Router.extend({
            routes : {
                '': 'home',
                'designers/add': 'addDesigner',
            },

            initialize: function() {
                var that = this,
                    configLoader = configHandler.loadApplicationConfig('laravel-rest');
                $.when(configLoader).done(function(){
                    that.config = this;
                    //i18n.init(that.config.get('internationalization'));
                    Backbone.history.start({pushSate: true});
                });
            },
            /**
             * Handler for home route.
             */
            home: function() {
                var self = this;
                require(
                    ['modules/rest-api/workflow'],
                    function( RestAPI ) {
                        
                        var beginWorkflow = function() {

                            return new RestAPI().init(self);

                        };
                      
                        return new beginWorkflow;
                    }
                );
            },
            addDesigner: function(){
                var self = this;
                require(
                    ['modules/designer/addDesigner'],
                    function( DesignerAdd ) {
               
                        return new DesignerAdd(self);
                    }   
            );
         }   
        }))();
       
        return App;
    }
);
