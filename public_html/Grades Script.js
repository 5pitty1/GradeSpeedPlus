
$(document).ready(function() {
  //  $(".notificationbar").addClass("enter");
    $('#exitbutton').click(function () {
        $('.notificationbar').removeClass("enter");
    });
    $('.sidebar').hover(function() {
        $('.notificationbar').toggleClass("shrink");
        $('.classcontainer2').toggleClass("shrink");
        $('.classcontainer2 ul li').toggleClass("shrink");
    });
});

