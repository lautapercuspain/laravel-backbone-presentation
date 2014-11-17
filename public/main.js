/**
 * File: main.js
 *
 * Main app module.
 *
 *
 */
require.config({
    baseUrl: '/',

    paths: {
        'backbone' : 'superlibs/box/backbone/1.0.0/backbone.min',
        'bootstrap'         : 'superlibs/box/twitter-bootstrap/2.3.1/js/bootstrap.min',
        'i18n'              : 'superlibs/box/i18next/1.6.2/i18next.min',
        'jquery'            : 'superlibs/box/jquery/1.9.1/jquery.min',
        //jQuery-UI only contains DatePicker
        'jquery-ui'         : 'superlibs/box/jquery-ui/1.10.3/js/jquery-ui-custom.min',
        'text'              : 'superlibs/box/text/2.0.6/text',
        'underscore'        : 'superlibs/box/underscore/1.4.4/underscore.min',
        'mustache'          : 'superlibs/box/mustache/0.7.2/mustache.min',
        'configHandler'     : 'configs/configHandler',
        'd3'                : 'superlibs/box/d3/d3'
    },

    shim: {
        'backbone': {
            deps: ['jquery', 'underscore'],
            exports: 'Backbone'
        },
        'bootstrap': {
            exports: 'Bootstrap'
        },
        'i18n': {
            deps: ['jquery'],
            exports: 'i18n'
        },
        'jquery': {
            exports: 'jQuery'
        },
        'jquery-ui': {
            deps: ['jquery']
        },
        'underscore': {
            exports: '_'
        },
        'mustache': {
            exports: 'Mustache'
        },
        'd3': {
            exports: 'd3'
        }
    }
});