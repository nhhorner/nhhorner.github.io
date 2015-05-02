var resize = function(){
    //Set Width
    var width = $( window ).width();
    $("main").css("left", (width - 700)/2);

    //Set Height
    var height = $( window ).height();
    $("#mapWrapper").height(height);
    $("main").height(height);
    console.log("The height of the main section: ", height);
};
$(document).ready(resize);
$(window).resize(resize);

$( "#email" ).append( "thenealhorner" + "@" + "gmail" + ".com");


var data = [
                {"name":"Python Email Sender", "url":"https://github.com/nealhorner/Python-Email-Sender", "image":"", "data":""},
                {"name":"Python One Line FizzBuzz", "url":"https://github.com/nealhorner/Python-Email-Sender", "image":"", "data":""}
                ];

for (var i in data) {
    $( "main" ).append( "<a class='projectLink center' class='center' href='" + data[i].url + "'><div class='project center'><h2>"+data[i].name+"</h2></div></a>" );
}

$( "#mapWrapper" ).append( '<img id="map" src="dabay13.jpeg">' );
