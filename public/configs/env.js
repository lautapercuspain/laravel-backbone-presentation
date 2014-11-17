/**
 * Define envarimonets variables here
 *
 *
 */
define(function () {
    var env = {
        'local' : {

            /* Error */
            error: {
                config: 'resources/config/errors.ini',
                page: '/error.php'
            },

            /* Features */
            features: {},

            /* Internationalization */
            internationalization : {
                lng: 'en',
                fallbackLng: 'en',
                fallbackToDefaultNS: true,
                debug: true,
                ns: 'rest-api',
                resGetPath:'/modules/__ns__/lang/__lng__.json',
                useLocalStorage: false,
                cookieName: 'rest-api'
            },

            /* Logger */
            logger: {
                location: '/logger.php'
            },

            /* Media domain */
            media: {
                baseUrls : '',
                secureBaseUrls: '',
                assetsDomain: ''
            },

            /* Celebrations */
            responseType : {
                format : 'json'
            },
            /* Services */
            services: {
                authentication  : false,
                url   : ''
            },

            utilityObject: {
              
            }
        },
        'dev' : {
              /* Error */
            error: {
                config: 'resources/config/errors.ini',
                page: '/error.php'
            },

            /* Features */
            host: {
                url: ''
            },
        },
        
    };

    return env;
});
