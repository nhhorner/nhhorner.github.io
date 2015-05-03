var resize = function(){
    //Set Width
    var width = $( window ).width();
    $("main").css("left", (width - 700)/2);

    //Set Height
    var height = $( document ).height();
    $("#mapWrapper").height(height);
    $("main").height(height);
};
$(document).ready(resize);
$(window).resize(resize);