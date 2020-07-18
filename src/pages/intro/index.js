//imports
import React, {Component} from 'react'
//components
//assets
import Underline from '../../assets/underline'
//style
import Wrapper from './style/'

class Intro extends Component {
    render = () =>
        <Wrapper className={this.props.classes}>
            <header>
                <svg viewBox="0 0 100 40">
                    <defs>
                        <linearGradient id="linear" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%"   stopColor="#05a"/>
                            <stop offset="50%"  stopColor="#a55"/>
                            <stop offset="100%" stopColor="#0a5"/>
                        </linearGradient>
                    </defs>
                    <text x='0' y='34px'>HELLO</text>
                </svg>
            </header>
            <div className='subtitle'>
                <p>Is it me you're looking for?</p>
                <Underline/>
                <div className='tags'>
                    <p>Back-End Architect</p>
                    <p>Front-End Developer</p>
                </div>
            </div>
        </Wrapper>
}

export default Intro