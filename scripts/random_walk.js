// Random Walk

const canvas_element = document.createElement('canvas')
canvas_element.setAttribute('id', 'canvas')
document.getElementById('random_walk').appendChild(canvas_element)
const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

const interval = 100
const step_distance = 10
const max_length = 8000
const y_max = document.getElementById('random_walk').clientHeight
const x_max = document.getElementById('random_walk').clientWidth
const lines = [
    [{ x: 0, y: 0 }],
    [{ x: 0, y: y_max }],
    [{ x: x_max, y: y_max }],
    [{ x: x_max, y: 0 }],
]
const color_palette = ['#504D7F', '#9C8105', '#244031', '#E57769']

// Resize
function resize_height() {
    canvas.height = document.body.clientHeight
    canvas.width = document.body.clientWidth
}
resize_height()
window.onresize = resize_height

function getNextPoint(point) {
    let new_point = { x: point.x, y: point.y }
    const heading = Math.floor(Math.random() * 8)
    if (heading === 0) {
        new_point.y += step_distance
    } else if (heading === 1) {
        new_point.y += step_distance
        new_point.x += step_distance
    } else if (heading === 2) {
        new_point.x += step_distance
    } else if (heading === 3) {
        new_point.y -= step_distance
        new_point.x += step_distance
    } else if (heading === 4) {
        new_point.y -= step_distance
    } else if (heading === 5) {
        new_point.y -= step_distance
        new_point.x -= step_distance
    } else if (heading === 6) {
        new_point.x -= step_distance
    } else if (heading === 7) {
        new_point.y += step_distance
        new_point.x -= step_distance
    }

    // Boundary limits
    if (new_point.x < 0) {
        new_point.x = 0
    } else if (new_point.x > document.getElementById('canvas').clientWidth) {
        new_point.x -= step_distance
    }
    if (new_point.y < 0) {
        new_point.y = 0
    } else if (new_point.y > document.getElementById('canvas').clientHeight) {
        new_point.y -= step_distance
    }
    return new_point
}

function walk() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    for (let i = 0; i < lines.length; i++) {
        let line = lines[i]
        line.push(getNextPoint(line[line.length - 1]))
        if (line.length > max_length) {
            line.shift()
        }
        ctx.beginPath()
        ctx.moveTo(line[0].x, line[0].y)
        for (let j = 1; j < line.length; j++) {
            ctx.lineTo(line[j].x, line[j].y)
        }
        ctx.strokeStyle = color_palette[i]
        ctx.lineWidth = 2
        ctx.stroke()
    }
}

setInterval(walk, interval)
