
$(document).ready(function() {
    $(".notification").addClass("enter");
    $('#exitbutton').click(function () {
        $('.notification').removeClass("enter");
    });
    $('.sidebar').hover(function() {
        $('.notification').toggleClass("shrink");
    });
});

