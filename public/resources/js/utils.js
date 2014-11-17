/*global App */
define(
    function() {
        function Utils() {
            this.error = function(status) {
                var errorPage = App.config.get('error.page');
                if (typeof(status) === 'undefined') {
                    status = '';
                }
                window.location.replace(errorPage + '?status=' + status);
            };
        }

        return new Utils();
    }
);