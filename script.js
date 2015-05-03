$( "#email" ).append( "thenealhorner" + "[at]" + "gmail" + ".com");

for (var i in data) {
    if (data[i].image.length > 1) {
        $( "main" ).append( "<a class='projectLink center' class='center' href='" + data[i].url + "'><div class='project center' style='background-image:url(" + data[i].image + "); background-repeat:no-repeat;'><h2>"+data[i].name+"</h2></div></a>" );
    } else {
        $( "main" ).append( "<a class='projectLink center' class='center' href='" + data[i].url + "'><div class='project center'><h2>"+data[i].name+"</h2></div></a>" );
    }
}