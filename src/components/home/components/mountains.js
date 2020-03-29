import React, {Component} from 'react'

class Mountains extends Component {
    constructor(props) {
        super()
        this.state = {
            amount: 22,
            shadow: props.shadow,
            width: window.innerWidth,
            height: window.innerHeight * .5,
            mountains: [],
            midpoint: props.midpoint,
        }
        this.generate_mountains()
    }
    rand_int = (min, max) => Math.floor(Math.random()*(max-min)+min)
    generate_mountains = () => {
        for(let i=0; i<this.state.amount; i++) {
            let m = {}
            m.y_start = this.state.height*.5
            m.size = this.rand_int(m.y_start/2,m.y_start)
            m.x_mid = this.rand_int(-this.state.width/2,this.state.width)
            m.x_start = m.x_mid - m.size
            m.x_end = m.x_mid + m.size
            m.path = `M${m.x_start},${m.y_start} `
            m.path += `l${Math.round(m.size * .9,2)},${Math.round(-m.size * .9,2)} `
            m.path += `c${Math.round(m.size * .1,2)},${Math.round(-m.size * .1,2)} ${Math.round(m.size * .1,2)},${Math.round(-m.size * .1,2)} ${Math.round(m.size * .2,2)},0 `
            m.path += `l${Math.round(m.size * .9,2)},${Math.round(m.size * .9,2)}z`
            this.state.mountains.push(m)
        }
        return this.state.mountains
    }
    render = () =>
        <svg className='mountains' width={this.state.width} height={this.state.height} version='1.1' xmlns='http://www.w3.org/2000/svg'>
            <linearGradient id='lgrad' x1='33%' y1='100%' x2='66%' y2='0%'>
                <stop offset='0%' style={{stopColor: '#111', stopOpacity: 1}}></stop>
                <stop offset='10%' style={{stopColor: '#111', stopOpacity: 1}}></stop>
                <stop offset='100%' style={{stopColor: '#030', stopOpacity: 1}}></stop>
            </linearGradient>
            {this.state.mountains.map((m, idx) => {
                const path = m.path.split(' ')
                const side = m.x_mid < this.state.midpoint ? 1 : -1
                path[0] = `M${m.x_start+ (this.state.shadow.size * side)},${m.y_start} `
                return <path key={idx} stroke='#111' fill={this.state.shadow.color} d={path}/>
            })}
            {this.state.mountains.map((m, idx) => <path key={idx} stroke='#111' fill='url(#lgrad)' d={m.path}/>)}
        </svg>
}

export default Mountains