$(function(){
    (".create-form").on("submit", function(event){
        event.preventDefault();

        var newBurger = {
            burger_name: ("#newburger").val().trim(),
            devoured: 0,
        };

        $(".eatburger").on("click",function(event){
            event.preventDefault();
            
            var id = $(this).data("id");
            var devouredState = {
                devoured: 1
            };

        })

        $.ajax("api.burger/" + id, {
            type: "PUT",
            data: devouredState
        }).then(function(){
            console.log("burgers been devoured!!!!!");
            location.reload();
        });

    });
});