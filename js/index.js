/* jshint loopfunc: true */
(function($) {
    "use strict";

    var userNames = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "LobosJR", "habathcx", "NairoMK", "noobs2ninjas", "comster404"];
    var api = "https://api.twitch.tv/kraken/streams/";
    var twitch = "https://twitch.tv/";

    function pushUser(userName, userData) { 
        $("#userList")
            .append($("<li>").attr("id", userName)
                .append($("<a>").attr("href", twitch + userName).text(userName)));

        if (userData) {
            if (userData.stream) {
                $(`#${ userName }`).addClass("online");
                $(`#${ userName }`).append(
                    $(`<span>: ${ userData.stream.game }</span>`));
            }
            else {
                $(`#${ userName }`).addClass("offline");
            }
        } else {
            $(`#${ userName }`).addClass("account-closed");
        }

        console.log(userName +":", userData);
    }

    function retrieveUsers() {

        for (let i = 0; i < userNames.length; i++) {
            $.ajax({
                url: api + userNames[i],
                method: "GET",
                jsonp: true,
                statusCode: {
                    404: function() {
                        pushUser(userNames[i], null);
                    }
                }
            })
            .done((data) => pushUser(userNames[i], data));
        }
    }


    ////EVENTS////
    $(".tab").click(function() {
        $(".tab").removeClass("selected");
        $(this).addClass("selected");

        switch(this.id) {
            case "offline":
                $("li.offline").show();
                $("li.online, li.account-closed").hide();
                break;
            case "online":
                $("li.online").show();
                $("li.offline, li.account-closed").hide();
                break;
            case "all":
                $("li").show();
        }
    });

    retrieveUsers();
})(jQuery);