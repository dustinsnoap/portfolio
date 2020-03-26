const container = document.body
const page_width = container.offsetWidth
const page_height = container.offsetHeight
const curve = document.getElementById('curve')

const width = page_width
const height = 350
const amplitude = 42
const speed = 25
const curves = 8

function calculate_points() {
    let points = []
    factor = Math.floor((Date.now())) / 1000
    for(let i=0; i<=curves; i++) {
        const x_pos = i/curves * width
        const seed = (factor + (i + i%curves)) * speed
        const y_pos = Math.pow(Math.sin(seed/100),2) * amplitude + height
        points.push({x: x_pos, y: y_pos})
    }
    return points
}

function build_path(points) {
    let path = `M ${points[0].x} ${points[0].y}`
    let curve = ``
    for(let i=0; i<points.length-1; i++) {
        if(!i) curve = {x: (points[1].x-points[0].x)/2, y: 2*points[1].y-points[0].y}
        else curve = {x: 2*points[i].x - prev.x, y: 2*points[i].y - prev.y}
        path += ` C ${curve.x} ${curve.y} ${curve.x} ${curve.y} ${points[i+1].x} ${points[i+1].y}`
        prev = curve
    }
    path += ` L ${page_width} ${page_height} L 0 ${page_height} Z`
    return path
}

setInterval(() => curve.setAttribute('d', build_path(calculate_points())), 1000/30)