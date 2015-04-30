var map = L.map('map', {zoomControl: false}).setView([51.505, -0.09], 13);
L.tileLayer('http://{s}.tiles.mapbox.com/v3/nhhorner.aaf9a69b/{z}/{x}/{y}.png', {maxZoom: 18}).addTo(map);


var resize = function(){
    //Set Width
    var marginFactor = 30 //Percent margin
    var width = $( window ).width();
    $("main").width(width*(1-(marginFactor/100)));
    $("main").css("left", width*((marginFactor/100)/2));
    console.log(width*(1-(marginFactor/100)), width*((marginFactor/100)/2), width);
    //Set Height
    var height = $( window ).height();
    $("#map").height(height);
    $("main").height(height);
}
resize();
$(document).ready(function(){resize()});
$(document).resize(function(){resize()});
