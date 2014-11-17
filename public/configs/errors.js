/**
*Define HTTP codes here
*/
define(function () {
    var errors = {
        '404'    : 'HTTP/1.0 404 Not Found',
        '500'    : 'HTTP/1.0 500 Internal Server Error',
        'default': 'HTTP/1.0 200 Ok'
    };
    return errors;
});