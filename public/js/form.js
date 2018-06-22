$(document).ready(function(){

  $(document).on("click", "#create-class", function(event) {
    event.preventDefault();
    alert("data sent!");
    var newUser = {
      buyer_name: $("#inputName").val().trim(),
      buyer_email: $("#inputEmail").val().trim(),
      contact_number: $("#inputPhone").val().trim(),
      contact_address: $("#inputAddress").val().trim()

      // buyer_name: "Lychee",
      // buyer_email: "Lychee@yahoo.com",
      // contact_number: "8897987987"
      //insert group on code into model database
      // forcePoints: $("#force-points").val().trim()
    };
  console.log("hello");
    // Question: What does this code do??
    $.post("/api/buyers", newUser)
    .then(function(data) {
      console.log(data);
      alert("Adding new user...");
    });
  });

})












// $(document).ready(function() {
//     // blogContainer holds all of our posts
//     var blogContainer = $(".blog-container");

//     var postEmail = $("#inputEmail");
//     var phoneNumber = $("#inputPhone");
//     var address = $("#inputAddress");
//     var fullName = $("#inputName").val.trim();

//     var mainCategory = $("#category");

//   $(document).on("click", "button.delete", handlePostDelete);
//   $(document).on("click", "button.edit", handlePostEdit);

//     var posts;

// })

    
 