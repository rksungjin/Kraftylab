// Krafty Lab javascript for client-side javascript


$(document).ready(function() {
    var whatCity = "";
    var whatClass = "";
    var tableSection = $("#sipnsoapcontainer");

    getScheduleData();

    // $(".sip").on("click", function() {

        // whatClass = $(clicksipnsoap).attr("data-name");
        // console.log("What class: " + whatClass);
        // whatCity = $(this).attr("data-name");
        // console.log("What city: " + whatCity);
        // $.get("/schedule", function(data) {
        //     console.log("hi");
        //     console.log(data);
            
        // })
        // .then(function() {
          
        //     getScheduleData();
            
        //   });
          function getScheduleData() {
            var queryUrl = "/api/"+whatClass+"/"+whatCity+"/";

            
            console.log(queryUrl);
            $.get(queryUrl, function(data) {
                console.log(data);
                if (data.length !== 0) {
                    for (var i=0; i<data.length; i++) {
                    var row = $("<div>");
                    // row.addClass("sip");
                    row.append("<h4>" + "Sip 'N Soap Classes in " + whatCity + "</h4>");
                    row.append("<p>" + data[i].date_time + "</p>");
                    // row.append("<p>" + data[i].time + "</p>");
                    row.append("<p>" + data[i].city_address + "</p>");
                    $(tableSection).append(row); // on schedule.html page
                    window.location = "../schedule";
                 
                    }
                };
            });
        }
    });
// })
    


                // classdata = data;
                // if (!classdata || !classdata.length) {
                // //   displayEmpty(author);
                // console.log('hi');
                // }
                // else {
                //   initializeRows();
                // }
                // function initializeRows() {
                //     tableSection.empty();
                //     var classToAdd = [];
                //     for (var i = 0; i < data.length; i++) {
                //       classToAdd.push(createNewRow(data[i]));
                //     }
                //     tableSection.append(classToAdd);
                //   }
                //   function createNewRow() {
                //     var tableSection = $("<div>");
                //     tableSection.data("classdata", classdata);
                //   }





            //     $(".city").html("<h1 class='text-center'>" + data + " Weather Details</h1>");
            //     var classRow = $("<div class='row'>");
            //     for(i = 0; i < 5; i++){
            //       var classDisplay = $("<div class='col-sm'>");
            //     //    classDisplay.html("<h3>" + data[i].class_name + "</h3><br><img src='" + forecast[i].icon_url + "'><br><p>Location: " + "<br>" + response.location.country_name + 
            //     //    "<p>Date: " + "<br>" + forecast[i].date.month + "/" + forecast[i].date.day + "/" + forecast[i].date.year + 
            //     //    "<p>Conditions: "+ "<br>" + forecast[i].conditions + "     " + "<br>" + "<br><span id='highTemp'>"+forecast[i].high.fahrenheit+"</span> | <span id='lowTemp'>"+forecast[i].low.fahrenheit+"</span>");
            //        classRow.append(classDisplay);
            //    }
            //    $("#tableSection").append(classRow);
                
                
                // for (var i = 0; i < data.length; i++) {
                //       var tableSection = $("<div>");
                //       tableSection.addClass("well");
                //       tableSection.attr("id", "tableWell-" + i + 1);
                //       $("#tableSection").append(tableSection);
                //       var tableNumber = i + 1;
                //       // Then display the remaining fields in the HTML (Section Name, Date, URL)
                //       $("#tableWell-" + i + 1).append("<h2><span class='label label-primary'>" + tableNumber + "</span> | " + data[i].class_name + "</h2>");
                //     }

            // if (data.length !== 0) {
            //     for (var i=0; i<data.length; i++) {
            //         var row = $("<div>");
            //         row.addClass("sip");
            //         row.append("<h4>" + "Sip 'N Soap Classes in " + whatCity + "</h4>");
            //         row.append("<p>" + data[i].date_time + "</p>");
            //         // row.append("<p>" + data[i].time + "</p>");
            //         row.append("<p>" + data[i].city_address + "</p>");

            //         $(".display-class").append(row); // on schedule.html page
    
            //         //    window.location.href = "/public/schedule.html";
    
            //         }
            //     }
            //   if (data) {
            //     // If this post exists, prefill our cms forms with its data
            //     titleInput.val(data.title);
            //     bodyInput.val(data.body);
            //     postCategorySelect.val(data.category);
            //     // If we have a post with this id, set a flag for us to know to update the post
            //     // when we hit submit
            //     updating = true;
            //   }
           
          
        
        // whatClass = "Sip_N_Soap";
        // console.log(whatClass);
        //console.log("What class: " + whatClass);
  

    // $(".terr").on("click", function() {
    //     whatCity = $(this).attr("data-name");
    //     console.log("What city: " + whatCity);
    //     whatClass = "terr";
    //     console.log("What class: " + whatClass);   
    // })

    // $(".sws").on("click", function() {
    //     whatCity = $(this).attr("data-name");
    //     console.log("What city: " + whatCity);
    //     whatClass = "sws";
    //     console.log("What class: " + whatClass);   
    // })


