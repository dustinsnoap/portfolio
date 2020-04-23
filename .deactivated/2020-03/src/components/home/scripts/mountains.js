const container = document.body
const page_width = container.offsetWidth
const page_height = container.offsetHeight
const svg = document.getElementById('mountains')
const element = document.getElementById('mountains')


const width = page_width
const height = 350
const num_of_mnts = 3

element.setAttribute('width', page_width)
element.setAttribute('height', height)
element.setAttribute('version', '1.1')
// element.setAttribute('xmlns', 'http://www.w3.org/2000/svg')
const xmlns_v = 'urn:v'
const gradient = document.createElementNS('http://www.w3.org/2000/svg', 'linearGradient')
gradient.setAttribute('id', 'lgrad')
gradient.setAttribute('x1', '33%')
gradient.setAttribute('y1', '100%')
gradient.setAttribute('x2', '66%')
gradient.setAttribute('y2', '0%')
const stops = [
    {offset: 0, color: '111'},
    {offset: 50, color: '111'},
    {offset: 100, color: '08f'}
]
for(const i in stops) {
    const stop = document.createElementNS('http://www.w3.org/2000/svg', 'stop')
    stop.setAttribute('offset', `${stops[i]['offset']}%`)
    stop.setAttribute('style', `stop-color:#${stops[i]['color']}; stop-opacity:1`)
    gradient.appendChild(stop)
}
element.appendChild(gradient)

const randInt = (min, max) => Math.floor(Math.random()*(max-min)+min)

function create_mountains() {
    let mountains = []
    for(let i=0; i<num_of_mnts; i++) {
        let m = {}
        m.size = randInt(height/4,height)
        m.x_mid = randInt(0,width)
        m.x_start = m.x_mid - m.size/2
        m.x_end = m.x_mid + m.size/2
        mountains.push(m)
    }
    return mountains
    // return mountains.sort((a,b) => b.x_size - a.x_size)
}

function draw_mountains(mountains) {
    for(const i in mountains) {
        let node = document.createElementNS('http://www.w3.org/2000/svg', 'path')
        let path = `M${mountains[i].x_start},${height} `
        path += `l${Math.round(mountains[i].size * .9,2)},${Math.round(-mountains[i].size * .9,2)} `
        path += `c${Math.round(mountains[i].size * .1,2)},${Math.round(-mountains[i].size * .1,2)} ${Math.round(mountains[i].size * .1,2)},${Math.round(-mountains[i].size * .1,2)} ${Math.round(mountains[i].size * .2,2)},0 `
        path += `l${Math.round(mountains[i].size * .9,2)},${Math.round(mountains[i].size * .9,2)}z`

        node.setAttribute('stroke', '#111')
        node.setAttribute('fill', 'url(#lgrad)')
        node.setAttribute('d', path)
        element.appendChild(node)
    }
}

draw_mountains(create_mountains())