/*global App */
define(
    ['jquery'],
    function($) {
        var LogLevels = {
           INFO: 'INFO',
           WARN: 'WARN',
           ERROR: 'ERROR'
        };
        function LogFactory() {
            var Logger = function(name) {
                this.log = function(message, priority) {
                    $.post(
                        App.config.get('logger.location'),
                        {
                            'priority': priority,
                            'message': message,
                            'id': name
                        }
                    );
                };

                /**
                 * Convenience definition of log levels.  Currently defined are:
                 * INFO: When something non-serious has occurred.
                 * WARN: When something potentially serious has occurred.
                 * ERROR: When something serious has occurred.
                 *
                 * @var object
                 */
                this.LogLevels = LogLevels;

                /**
                 * Convenience method to log an error response.
                 *
                 * @param message string message providing context to the error
                 * @param requestUri string request URI that generated this response
                 * @param response object response object provided by $.ajax call
                 */
                this.logResponseError = function(message, requestUri, response) {
                    this.log(message +
                            ' [Request URI: ' + requestUri + ']' +
                            ' [Response Status: ' + response.status + ' ' + response.statusText + ']' +
                            ' [Response Body: ' + response.responseText + ']',
                        this.LogLevels.ERROR
                    );
                };
            };

            this.getLogger = function(name) {
                return new Logger(name);
            };
        }

        return new LogFactory();
    }
);