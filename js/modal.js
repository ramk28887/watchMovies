/**
 * Created by Ram on 25/05/15.
 */
var reset = $("#reset"),
    modal = $("#myForm");


$( document ).ready(function() {
    reset.on("click", function() {
        modal.trigger("reset");
    });
});




