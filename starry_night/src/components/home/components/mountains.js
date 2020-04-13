import React, {Component} from 'react'

class Mountains extends Component {
    constructor(props) {
        super()
        this.state = {
            width: window.innerWidth,
            height: window.innerHeight,
            amount: props.amount,
            shadow: props.shadow,
            color: props.color,
            size: props.size,
            midpoint: props.midpoint,
            mountains: [],
        }
        this.generate_mountains()
    }
    rand_int = (min, max) => Math.floor(Math.random()*(max-min)+min)
    generate_mountains = () => {
        for(let i=0; i<this.state.amount; i++) {
            let m = {}
            m.y_start = this.state.height
            m.size = this.rand_int(this.state.height*this.state.size.min/100,this.state.height*this.state.size.max/100)
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
                <stop offset='0%' style={{stopColor: this.state.color.dark, stopOpacity: 1}}></stop>
                <stop offset='10%' style={{stopColor: this.state.color.dark, stopOpacity: 1}}></stop>
                <stop offset='100%' style={{stopColor: this.state.color.light, stopOpacity: 1}}></stop>
            </linearGradient>
            <defs>
                <pattern id='p1' x='0' y='0' height='7' width='7' patternUnits='userSpaceOnUse'>
                    {/* <path d='M-1,8 l9,-9z' stroke='#111' fill='#111'/> */}
                    <path d='M0,6 l6,-6 1,0 0,1 -6,6 -1,0Z M6,7 l1,-1 0,1Z M0,1 l1,-1 -1,0Z' fill='#111' />
                </pattern>
            </defs>
            {this.state.mountains.map((m, idx) => {
                const s = m
                const spath = s.path.split(' ')
                const side = s.x_mid < this.state.midpoint ? 1 : -1
                spath[0] = `M${s.x_start+ (this.state.shadow.size * side)},${s.y_start} `
                return ([
                    <path key={idx} stroke={this.state.color.dark} fill={this.state.shadow.color} d={spath}/>,
                    <path key={idx} stroke={this.state.color.dark} fill='url(#lgrad)' d={m.path}/>,
                    <path key={idx} stroke={this.state.color.dark} fill='url(#p1)' d={m.path}/>,
                ])
            })}
        </svg>
}

export default Mountains