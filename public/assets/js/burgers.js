$(function() {
    $(document).on("click", "#change-devoured", function (event) {
        var id = $(this).data("id");
        var newdevoured = $(this).data("newdevoured");
        console.log("newdevoured", newdevoured)

        var newDevouredState = {
            eaten: newdevoured
        };
		console.log("nDS =", newDevouredState)

        // Now create the Ajax PUT request
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newDevouredState
        }).then(
            function() {
                console.log("changed devoured state to", newdevoured);
                //Reload the page to get the updated list
                location.reload();
            });
    });

    $(".create-form").on("submit", function(event) {
        // Insert a prevent default on submit event to prevent refreshing of page
        event.preventDefault();

        var newBurger = {
            burger_name: $("#ca").val().trim(),
            eaten: $("[name=eaten]:checked").val().trim()
        };

        // send the post request
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function() {
                console.log("created new burger");
                //reload
                location.reload();
            });
    });
    //insert delete here
    $(".delete-burger").on("click", function(event) {
        var id = $(this).data("id");
        //send request
    $.ajax("/api/burgers/" + id, {
        type: "DELETE"
      }).then(
        function() {
          console.log("deleted burger", id);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
});