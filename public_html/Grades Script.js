
$(document).ready(function() {
    $(".notification").addClass("enter");
    $('#exitbutton').click(function () {
        $('.notification').removeClass("enter");
    });
    var sideBarButtonsHeight = document.getElementsByClassName("sidebarbuttons").style.height;
    var notificationWidth = document.getElementsByClassName("sidebar").style.width;
    document.getElementsByClassName("sidebarbuttons").style.marginTop = sideBarButtonsHeight/2;
    document.getElementsByClassName("notification").style.width -= notificationWidth;
});

