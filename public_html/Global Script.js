$(document).ready(function () {
    $(".notificationbar").addClass("enter");
    $('#exitbutton').click(function () {
        $('.notificationbar').removeClass("enter");
    });
    $('.sidebar').hover(function () {
        $('.notificationbar').toggleClass("shrink");
    });
    $(window).scroll(function () {
        $('.notificationbar').removeClass("enter");
    })
});
