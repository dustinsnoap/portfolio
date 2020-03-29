//imports
import React, {Component} from 'react'
//components
//scripts
//style
import Wrapper from './style'

class Home extends Component {
  constructor(props) {
    super()
    this.state = {
      num_of_mnts: 22,
      moon: {
        location: {x: 70,y: 20},
      }
    }
  }
  componentDidMount() {
  }
  test = () =>
      <div>
        {[1,2,3].map((item, idx) => <h1 key={idx}>{item}</h1>)}
      </div>
  rand_int = (min, max) => Math.floor(Math.random()*(max-min)+min)
  mountains = () => {
    const width = window.innerWidth
    const height = window.innerHeight*.5
    let mountains = []
    for(let i=0; i<this.state.num_of_mnts; i++) {
      let m = {}
      m.size = this.rand_int(height/2,height)
      m.x_mid = this.rand_int(-width/2,width)
      m.x_start = m.x_mid - m.size/2
      m.x_end = m.x_mid + m.size/2
      m.path = `M${m.x_start},${height} `
      m.path += `l${Math.round(m.size * .9,2)},${Math.round(-m.size * .9,2)} `
      m.path += `c${Math.round(m.size * .1,2)},${Math.round(-m.size * .1,2)} ${Math.round(m.size * .1,2)},${Math.round(-m.size * .1,2)} ${Math.round(m.size * .2,2)},0 `
      m.path += `l${Math.round(m.size * .9,2)},${Math.round(m.size * .9,2)}z`
      mountains.push(m)
    }
    return <svg className='mountains' width={width} height={height} version='1.1' xmlns='http://www.w3.org/2000/svg'>
      <linearGradient id='lgrad' x1='33%' y1='100%' x2='66%' y2='0%'>
        <stop offset='0%' style={{stopColor: '#111', stopOpacity: 1}}></stop>
        <stop offset='10%' style={{stopColor: '#111', stopOpacity: 1}}></stop>
        <stop offset='100%' style={{stopColor: '#030', stopOpacity: 1}}></stop>
      </linearGradient>
      {mountains.map((m, idx) => 
        <path key={idx} stroke='#111' fill='url(#lgrad' d={m.path}/>
      )}
    </svg>
  }
  render() {
    return (
      <Wrapper className='home'>
        <div className='background'>
          <figure className='moon' style={{transform: `translate(${this.state.moon.location.x}vw,${this.state.moon.location.y}vh)`}}></figure>
          {/* convert this to child component */}
          {this.mountains()}
        </div>
      </Wrapper>
    )
  }
}

export default Home