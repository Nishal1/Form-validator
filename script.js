            function isEmail(email) {
                var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
                return regex.test(email);
            }

            $("#submit-button").click(function() {
                var errorMessage = "";
                var feildsMissing = "";
                if($("#email").val() == "") {
                    feildsMissing += "<br> Email";
                }
                if($("#telephone").val() == "") {
                    feildsMissing += "<br> Telephone";
                }
                if($("#password").val() == "") {
                    feildsMissing += "<br> Password";
                }
                if($("#passwordConfirm").val() == "") {
                    feildsMissing += "<br>Confirm Password";
                }
                if(feildsMissing != "") {
                    errorMessage = "The following feilds are missing:<br>" + feildsMissing;
                }
                if(!isEmail($("#email").val())){
                    errorMessage += "<p>Your email address is not valid</p>";
                }
                if(!$.isNumeric($("#telephone").val())){
                    errorMessage += "<p>Your phone number is not numeric</p>"
                }
                if($("#password").val() != $("#passwordConfirm").val()) {
                    errorMessage += "<p>Your passwords don't match</p>"
                }
                if(errorMessage != "") {
                     $("#error-message").html(errorMessage);
                } else {
                    $("#success-message").show();
                    $("#error-message").hide();
                }
            });