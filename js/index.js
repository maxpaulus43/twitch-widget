(function($) {
    "use strict";

    var users = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];

    var api = "https://api.twitch.tv/kraken/streams/";


    function retrieveUsers() {
        $.ajax({

        });
    }   

    $("#refreshBtn").on("click", retrieveUsers);
})(jQuery);
