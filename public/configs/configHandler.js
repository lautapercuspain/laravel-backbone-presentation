/**
 * Provides an utility function to get application environment
 * specific config values.
 *
 *
 */
define(
    [
     'underscore',
     'jquery'
    ],
    function (_, $) {
        var configHandler = {};

        /**
         * Gets the environment id according to the hostname.
         *
         * @returns String env
         */

        // @todo Add config driven environment selection rather than URL matching
        function _getEnvironment() {
            var hostname = window.location.hostname;

            var environments = {
                /* Local */
                'http://laravel-rest.com'      : 'local',
                'localhost'                 : 'local',
                '127.0.0.1'                 : 'local',

                /* Dev */
                'http://laravel-rest.com'        : 'dev',
            };

            //return env;
            return environments[hostname] ? environments[hostname] : 'local';
        }

        /**
         * Recursive helper function for finding objects by key
         *
         * @returns object
         */
        function _getParameter (key, obj){
            var parts, firstPart;
            if (key.length > 0 && obj) {
                parts = key.split('.');
                firstPart = parts.splice(0, 1);
                return _getParameter(parts.join('.'), obj[firstPart]);
            }
            return obj;
        }

        /**
         * Simple config class
         *
         * @returns object
         */
        function Configuration( config ) {
            this.attributes = config;
            this.get = function(key) {
                return _getParameter(key, this.attributes);
            };
        }

        /**
         * Create a new configuration
         *
         * @returns object
         */
        configHandler.createConfig = function(json){
            return new Configuration(json);
        };

        /**
         * Loads a given config and returns a $.Deferred to be resolved when
         * after it has been loaded
         *
         * @returns $.Deferred
         */
        configHandler.loadApplicationConfig = function (cfg) {
            var config = ('configs/' + cfg),
                deferred = $.Deferred();
            require([config], function(appConfig) {
                var newConfig = configHandler.createConfig(appConfig[_getEnvironment()]);
                deferred.resolveWith(newConfig);
            });
            return deferred.promise();
        };

        return configHandler;
    }
);