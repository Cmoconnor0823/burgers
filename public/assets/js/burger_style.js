// wait to run anything untill the dom is loaded.
$(function() {
    $(".change-eat").on("click", function(event) {
        var id = $(this).data("id");
        var newEat = $(this).data("newEat");

        var newEatState = {
            devoured: newEat
        };

        // Now create the Ajax PUT request
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newEatState
        }).then(
            function() {
                console.log("changed devoured state to", newEat);
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