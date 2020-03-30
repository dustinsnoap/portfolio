import React, {Component} from 'react'

class Stars extends Component {
    constructor(props) {
        super()
        this.state = {
            width: window.innerWidth,
            height: window.innerHeight,
            amount: props.amount,
            size: props.size,
            speed: props.speed,
            color: props.color,
            brightness: props.brightness,
            canvas: null,
            ctx: null,
            interval_key: null,
        }
    }
    componentDidMount() {
        let stars = this.generate_stars()
        this.setState(() => {return {
            canvas: document.querySelector('.home .background .stars'),
            ctx: document.querySelector('.home .background .stars').getContext("2d"),
            interval_key: setInterval(() => {
                this.update_stars(stars)
                this.draw_stars(stars)
            }, 1000/30)
        }})
    }
    componentWillUnmount() {clearInterval(this.state.interval_key)}
    rand_int = (min, max) => Math.floor(Math.random()*(max-min)+min)
    rand_float = (min,max,dec) => (Math.random()*(max-min)+min).toFixed(2)
    hex_to_hsl = (hex) => {
        if(hex.length < 5) {
            hex = hex.replace(/#\b/g, '')
            hex = `${hex[0]}${hex[0]}${hex[1]}${hex[1]}${hex[2]}${hex[2]}`
        }
        const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
        const r = parseInt(result[1], 16)/255
        const g = parseInt(result[2], 16)/255
        const b = parseInt(result[3], 16)/255
        const max = Math.max(r, g, b), min = Math.min(r, g, b)
        let h, s, l = (max + min) / 2
        if(max === min) h = s = 0 // achromatic
        else {
            const d = max - min
            s = l>0.5 ? d/(2-max-min) : d/(max+min)
            switch(max){
                case r: h = (g-b)/d + (g<b ? 6 : 0); break
                case g: h = (b-r)/d+2; break
                case b: h = (r-g)/d+4; break
                default: break
            }
        }
        return {h: h*60, s: s*100, l: l*100}
    }
    generate_stars = () => {
        let stars = []
        const color = this.hex_to_hsl(this.state.color)
        for(let i=0; i<this.state.amount; i++) {
            let s = {}
            s.color = {...color}
            s.color['l'] = this.rand_int(25,75)
            s.size = this.rand_float(this.state.size.min,this.state.size.max,2)
            s.loc = {x: this.rand_int(0,this.state.width), y: this.rand_int(0,this.state.height)}
            const brightness = this.rand_int(this.state.brightness.min, this.state.brightness.max)
            s.brightness = {
                min: Math.floor(brightness/2) < 0 ? 0 : Math.floor(brightness/2),
                max: Math.floor(brightness*2) > 100 ? 100 : Math.floor(brightness*2),
                cur: brightness
            }
            const speed = this.rand_int(this.state.speed.min,this.state.speed.max)
            s.step = Math.round((s.brightness.max - s.brightness.min) / speed)
            s.step *= Math.random() >= 0.5 ? 1 : -1
            stars.push(s)
        }
        return stars
    }
    update_stars = (stars) => {
        for(let i=0; i<stars.length; i++) {
            stars[i].brightness.cur += stars[i].step
            if(stars[i].brightness.cur > stars[i].brightness.max) stars[i].brightness.cur = stars[i].brightness.max
            else if(stars[i].brightness.cur < stars[i].brightness.min) stars[i].brightness.cur = stars[i].brightness.min
            else continue
            stars[i].step *= -1
        }
    }
    draw_stars = (stars) => {
        const ctx = this.state.ctx
        ctx.clearRect(0,0,this.state.width,this.state.height)
        for(let i in stars) {
            ctx.fillStyle = `hsla(${stars[i].color.h},${stars[i].color.s}%,${stars[i].color.l}%,${stars[i].brightness.cur/100})`
            ctx.fillRect(stars[i].loc.x,stars[i].loc.y,stars[i].size,stars[i].size)
        }
    }
    render = () =>
        <canvas className='stars' height={this.state.height} width={this.state.width}></canvas>
}

export default Stars