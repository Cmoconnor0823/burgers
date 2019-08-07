// wait to run anything untill the dom is loaded.
$(function() {
    $(".change-devoured").on("click", function(event) {
        var id = $(this).data("id");
        var newDevoured = $(this).data("newDevoured");

        var newDevouredState = {
            devoured: newDevoured
        };

        // Now create the Ajax PUT request
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newDevouredState
        }).then(
            function() {
                console.log("changed devoured state to", newDevoured);
                //Reload the page to get the updated list
                location.reload();
            });
    });

    $(".create-form").on("submit", function(event) {
        // Insert a prevent default on submit event to prevent refreshing of page
        event.preventDefault();

        var newBurger = {
            name: $("#ba").val().trim(),
            devoured: $("[name=devoured]:checked").val().trim()
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






});