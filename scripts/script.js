//Resize
var resize_height = function() {
  if ($(window).height() > $("#main_height").height()) {
    $("#main").height($(window).height());
    $("#main_container").height($(window).height());
  } else {
    $("#main").height($("#main_height").height());
    $("#main_container").height($("#main_height").height());
  }
}
resize_height();
$(window).resize(resize_height);

// //Projects & Tidbits
// $("#project_title").hover(function() {
//     $(".project_lines").css("display", "block");
//     if (!projects_visible) {
//         $( ".project_lines" ).eq(0).animate({
//             marginBottom: "15px"
//         }, 500);
//     }
//     resize_height();
// }, function() {
//     if (!projects_visible) {
//         $(".project_lines").css("display", "none");
//         $( ".project_lines" ).eq(0).css("margin-bottom",0);
//     }
//     resize_height();
// });

// var project_data = [
//     {"title":"Test Item 1", "url":"http://nealhorner.com", "month":"June", "year":"2015"},
//     {"title":"Test Item 2", "url":"http://nealhorner.com", "month":"May", "year":"2015"}
// ];

// var projects_visible = false;
// $("#project_title").click(function() {
//     if (!projects_visible) {
//         $("#project_symbol").html("-");
//         $(".project_lines").css("display", "block");
//         $( ".project_lines" ).eq(0).css("margin-bottom",15);
//         for (var i in project_data) {
//             $("#projects_containter").append("<div class='project'><a class='link_class' href='" + project_data[i].url + "'>" + project_data[i].title + "<span style='float:right'>" + project_data[i].month + " " + project_data[i].year + "</span></a></div>");
//         }
//         projects_visible = true;
//     } else {
//         $("#project_symbol").html("+");
//         $(".project_lines").css("display", "none");
//         $("#projects_containter").empty();
//         projects_visible = false;
//     }
//     resize_height();
// });

//Random Walk
$("#random_walk").append("<svg></svg>");

var step_distance = 10;
var y_max = $("#random_walk").height();
var x_max = $("#random_walk").width();
var walking = true;
var line_count = 0;
var points = [[0,0],[0,y_max],[x_max,y_max],[x_max,0]]
var color_palette = ["#504D7F","#9C8105","#244031","#E57769"]; //Orginal
//var color_palette = ["#B01A06","#5E04BA","#11BA09","#B08F03"]; //Bright
//var color_palette = ["#4C0B03","#2C0257","#085704","#4C3E01"]; //Dark
//var color_palette = ["#821305","#2C0257","#085704","#8A7003"]; //Hybrid

var nextPoint = function(set) {
  var random_number = Math.random();
  if (random_number < 0.125) {set[1] += step_distance}
  if (random_number >= 0.125 && random_number < 0.25) {set[1] += step_distance; set[0] += step_distance}
  if (random_number >= 0.25 && random_number < 0.375) {set[0] += step_distance}
  if (random_number >= 0.375 && random_number < 0.5) {set[1] -= step_distance; set[0] += step_distance}
  if (random_number >= 0.5 && random_number < 0.625) {set[1] -= step_distance;}
  if (random_number >= 0.625 && random_number < 0.75) {set[1] -= step_distance; set[0] -= step_distance}
  if (random_number >= 0.75 && random_number < 0.875) {set[0] -= step_distance}
  if (random_number >= 0.875) {set[1] += step_distance; set[0] -= step_distance}

  if (set[0] < 0) {set[0] = 0;}
  if (set[0] > $("#random_walk").width()) {set[0] -= step_distance;}
  if (set[1] < 0) {set[1] = 0;}
  if (set[1] > $("#random_walk").height()) {set[1] -= step_distance;}

  return [set[0],set[1]]
}

var walk = function (points) {
  $("svg").height($("#random_walk").height());

  for (var set in points) {
    old_point_x = points[set][0];
    old_point_y = points[set][1];
    points[set] = nextPoint(points[set]);
    var newLine = document.createElementNS('http://www.w3.org/2000/svg','line');
    newLine.setAttribute('x1',old_point_x);
    newLine.setAttribute('y1',old_point_y);
    newLine.setAttribute('x2',points[set][0]);
    newLine.setAttribute('y2',points[set][1]);
    newLine.setAttribute('stroke', color_palette[set]);
    newLine.setAttribute('stroke-width','1');
    $("svg").append(newLine);

    line_count += 1;

    if (line_count > 8000) {
        $("svg").find(':first-child').remove();
        line_count -= 1;
    }
  }

  window.setTimeout(function() {
    if (walking) {
        walk(points);
    }
  }, 1);
}

walk(points);

//Link Hover
var src_toggle = {
  "./images/GitHub-Mark-64px.png":"./images/GitHub-Mark-Light-64px.png", "./images/GitHub-Mark-Light-64px.png":"./images/GitHub-Mark-64px.png",
  "./images/In-Black-66px-R.png":"./images/In-White-66px-R.png", "./images/In-White-66px-R.png":"./images/In-Black-66px-R.png"
}
$("a")
  .mouseover(function() {
    $(this).children("img").attr("src", src_toggle[$(this).children("img").attr("src")]);
  }) .mouseout(function() {
    $(this).children("img").attr("src", src_toggle[$(this).children("img").attr("src")]);
  });