/**
 * Auth service to authenticate a single http request
 *
 */

 define(
    ['jquery'],
    function($) {
        function AuthService() {
            this.getToken = function(onSuccess) {
                var postDataToGetToken = "grant_type=client_credentials" +
                    "&client_id=yourclientID" + 
                    "&client_secret=E2050034-0C95-11E1-872D-1BB84724019B" +
                    "&scope=YourScope";

                $.ajax({
                    url: '',
                    type: 'POST',
                    dataType: "json",
                    data: postDataToGetToken,
                    crossDomain: true
                }).done(function (data) {
                    if (typeof onSuccess === 'function') {
                        onSuccess(console.log(data.access_token));
                    }
                });
            };
        }
        return new AuthService();
    }
);