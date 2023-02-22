//Random Walk
canvas_el = document.createElement('canvas');
canvas_el.setAttribute("id", "canvas");
document.getElementById("random_walk").appendChild(canvas_el);
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const step_distance = 10;
const max_length = 8000;
const y_max = document.getElementById("random_walk").clientHeight;
const x_max = document.getElementById("random_walk").clientHeight;
const lines = [[{x:0, y:0}],[{x:0, y:y_max}],[{x:x_max, y:y_max}],[{x:x_max, y:0}]]
const color_palette = ["#504D7F", "#9C8105", "#244031", "#E57769"];

//Resize
function resize_height() {
  let main_height = document.getElementById("main_height").clientHeight;
  let window_height = window.clientHeight;
  let new_height = Math.max(main_height, window_height);
  document.getElementById("main").style.height = `${new_height}px`;
  document.getElementById("main_container").style.height = `${new_height}px`;
  canvas.height = new_height;
}
resize_height();
window.onresize = resize_height;



function getNextPoint(point) {
  const heading = Math.floor(Math.random() * 8); 
  if (heading === 0) {point.y += step_distance}
  else if (heading === 1) {point.y += step_distance; point.x += step_distance}
  else if (heading === 2) {point.x += step_distance}
  else if (heading === 3) {point.y -= step_distance; point.x += step_distance}
  else if (heading === 4) {point.y -= step_distance;}
  else if (heading === 5) {point.y -= step_distance; point.x -= step_distance}
  else if (heading === 6) {point.x -= step_distance}
  else if (heading === 7) {point.y += step_distance; point.x -= step_distance}

  // Boundry limits
  if (point.x < 0) {point.x = 0;}
  else if (point.x > document.getElementById("random_walk").clientWidth) {point.x -= step_distance;}
  if (point.y < 0) {point.y = 0;}
  else if (point.y > document.getElementById("random_walk").clientHeight) {point.y -= step_distance;}

  return point
}

// function walk(points) {
//   $("svg").height($("#random_walk").height());

//   for (var pair in points) {
//     old_point_x = points[pair][0];
//     old_point_y = points[pair][1];
//     points[pair] = nextPoint(points[pair]);
//     var newLine = document.createElementNS('http://www.w3.org/2000/svg','line');
//     newLine.setAttribute('x1',old_point_x);
//     newLine.setAttribute('y1',old_point_y);
//     newLine.setAttribute('x2',points[pair][0]);
//     newLine.setAttribute('y2',points[pair][1]);
//     newLine.setAttribute('stroke', color_palette[pair]);
//     newLine.setAttribute('stroke-width','1');
//     $("svg").append(newLine);

//     line_count += 1;

//     if (line_count > 8000) {
//         $("svg").find(':first-child').remove();
//         line_count -= 1;
//     }
//   }
// }


(function () {

  function walk() {
    // window.requestAnimationFrame( walk );

    ctx.clearRect(0,0,canvas.width,canvas.height);
    
    for(let i = 0; i < lines.length; i++) {
      let line = lines[i];
      line.push(getNextPoint(line[line.length - 1]))
      if (line.length > max_length) {line.shift()}

      console.log(i, line)

      ctx.beginPath();
      for(let j = 0; j < line.length; j++) {
        let point = line[j];
        ctx.lineTo(point.x, point.y);
      }

      ctx.strokeStyle=color_palette[i];
      ctx.lineWidth=1;
      ctx.stroke();
    }
  
  }
  
  walk();
})();
