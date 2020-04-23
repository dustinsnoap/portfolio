import React, {Component} from 'react'

class Moon extends Component {
    constructor(props) {
        super()
        this.state = {
            width: window.innerWidth,
            height: window.innerHeight,
            location: props.location,
            size: props.size,
        }
    }
    render = () =>
        <figure className='moon'
            style={{
                height: `${this.state.size}em`,
                width: `${this.state.size}em`,
                transform: `translate(${this.state.location.x}vw,${this.state.location.y}vh)`
            }}>
        </figure>
}

export default Moon