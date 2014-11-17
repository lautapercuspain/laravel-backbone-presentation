/**
 * Define the main configuration of our app
 *
 */
define(['configs/env', 'configs/errors'], 
    function (baseConfig, errorConfig) {
        var appConfig = {
            'local' : {
                media: {
                },
                app: {
                    baseUrls : '/',
                    identifier: 'laravel-rest',
                    utility: {
                        faviconIcon: '',
                        faqUrl: ''
                    }
                }
            }
        };
        return $.extend(true, {}, appConfig, errorConfig, baseConfig);
});