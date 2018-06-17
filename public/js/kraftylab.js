// Krafty Lab javascript for client-side javascript


$(document).ready(function() {
    var whatCity = "";
    var whatClass = "";
    $(".sip").on("click", function() {
        whatClass = $(clicksipnsoap).attr("data-name");
        console.log("What class: " + whatClass);
        whatCity = $(this).attr("data-name");
        console.log("What city: " + whatCity);
        
        // whatClass = "Sip_N_Soap";
        // console.log(whatClass);
        //console.log("What class: " + whatClass);
        
        $.get("/api/" + whatClass + "/" + whatCity, function(data) {
            console.log(data);
            if (data.length !== 0) {
                for (var i=0; i<data.length; i++) {
                    var row = $("<div>");
                    row.addClass("sip");
                    row.append("<h4>" + "Sip 'N Soap Classes in " + whatCity + "</h4>");
                    row.append("<p>" + data[i].date_time + "</p>");
                    // row.append("<p>" + data[i].time + "</p>");
                    row.append("<p>" + data[i].city_address + "</p>");

                    $("#display-class").append(row); // on schedule.html page

                   window.location.href = "/public/schedule";

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
