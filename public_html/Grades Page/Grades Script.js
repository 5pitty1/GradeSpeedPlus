$(document).ready(function () {
    $('.sidebar').hover(function () {
        $('#classes').toggleClass("small");
    });
    $('#classes').find('tr').each(function() {
        var grade = $(this).find('td').html();
        $(this).find('td').each(function() {
            grades(grade);
        });
    });
});

function grades(x){
    x = parseInt(x);
    if(x<70){
        $(this).addClass("F");
    } else if(x>=70&&x<80) {
        $(this).addClass("C");
    } else if(x>=80&&x<90) {
        $(this).addClass("B");
    } else {
        $(this).addClass("A");
    }
}