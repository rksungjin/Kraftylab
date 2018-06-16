// Krafty Lab javascript for client-side javascript



$(document).ready(function() {
    var whatCity = "";
    var whatClass = "";
    $(".sip").on("click", function() {
        whatCity = $(this).attr("data-name");
        console.log("What city: " + whatCity);
        whatClass = "sip";
        console.log("What class: " + whatClass);
        
        $.get(`/api/sipnsoap/${whatCity}`, function(data) {
            if (data.length !== 0) {
                for (var i=0; i<data.length; i++) {
                    var row = $("<div>");
                    row.addClass("sip");
                    row.append("<h4>" + "Sip 'N Soap Classes in " + whatCity + "</h4>");
                    row.append("<p>" + data[i].date + "</p>");
                    row.append("<p>" + data[i].time + "</p>");
                    row.append("<p>" + data[i].address + "</p>");

                    $("#clicksipnsoap").append(row);

                   window.location.href = "/public/schedule.html"

                }
            }
        })
    })

    $(".terr").on("click", function() {
        whatCity = $(this).attr("data-name");
        console.log("What city: " + whatCity);
        whatClass = "terr";
        console.log("What class: " + whatClass);   
    })

    $(".sws").on("click", function() {
        whatCity = $(this).attr("data-name");
        console.log("What city: " + whatCity);
        whatClass = "sws";
        console.log("What class: " + whatClass);   
    })


});
