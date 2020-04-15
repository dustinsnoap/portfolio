//imports
import React, {Component} from 'react'
//components
//assets
import Underline from '../../assets/underline'
//style
import Wrapper from './style'

class Intro extends Component {
    render = () =>
        <Wrapper>
            <header>
                <svg viewBox="0 0 100 40">
                    <defs>
                        <linearGradient id="linear" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%"   stop-color="#05a"/>
                            <stop offset="50%"  stop-color="#a55"/>
                            <stop offset="100%" stop-color="#0a5"/>
                        </linearGradient>
                    </defs>
                    <text x='0' y='34px'>HELLO</text>
                </svg>
            </header>
            <subtitle>
                <p>I'm Dustin,</p>
                <Underline/>
                <p>Back-End Architect</p>
                <p>Front-End Developer</p>
            </subtitle>
        </Wrapper>
}

export default Intro