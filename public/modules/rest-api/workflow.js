define([
        'module',
        'modules/rest-api/views/designersView',
        'modules/rest-api/models/designersModel',
        'modules/rest-api/collections/designersCollection',
    ],
    function(
        Module,
        DesignersView,
        DesignersModel,
        DesignersCollection
    ) {

        return function() {
            return {
                init: function(app) {

                var self = this;
                    this.designersModel = new DesignersModel();
                    this.designersCollection = new DesignersCollection({
                        model: this.designersModel
                    });
                    this.designersView = new DesignersView({
                        collection: this.designersCollection,
                        model: this.designersModel,
                        app:app
                    });

                    this.designersCollection.fetch().then(
                        function(response) {
                      
                          self.designersView.render(response);

                          
                                  

                        }, function() {
                            alert("something were wrin when trying to fetch the collection!");
                        }
                    );
                    App.Appcollection = self.designersCollection;
                    App.Appmodel = self.designersModel;

                },
                putIntoView: function(object) {
                    self.init.designersView.render(object);
                },

            };
        };
    });
