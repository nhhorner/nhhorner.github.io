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

//Random Walk
$("#random_walk").append("<svg></svg>");

var step_distance = 10;
var y_max = $("#random_walk").height();
var x_max = $("#random_walk").width();
var walking = true;
var line_count = 0;
var points = [[0,0],[0,y_max],[x_max,y_max],[x_max,0]]
var color_palette = ["#504D7F","#9C8105","#244031","#E57769"];

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
