//imports
import React, {Component} from 'react'
//components
import Mountains from './components/mountains'
import Moon from './components/moon'
import Stars from './components/stars'
import Title from './components/title'
//scripts
//style
import Wrapper from './style'

class Home extends Component {
    constructor(props) {
        super()
        this.state = {
            width: window.innerWidth,
            height: window.innerHeight,
            title: {
                title: 'dustin sno∆p',
                subtitles: ['unexpected', 'distruptive', 'undefined', 'unlabled', 'not sure', 'developer', 'mad scientist'],
                characters: '`¡™£¢∞§¶•ªº–≠å∂ƒ©˙˚¬…æ≈ç√∫˜µ≤≥÷/?░▒▓<>/',
                chance: .1,
                fps: 10,
            },
            stars: {
                amount: 500,
                color: '000408',
                size: {min: .5, max: 2.5},
                speed: {min: 10, max: 100, x: .1, y: -.1},
                brightness: {min: 50, max: 100}
            },
            mountains: {
                amount: 22,
                size: {min: 10, max: 33},
                shadow: {size: 4, color: '#456'},
                color: {light: '#030', dark: '#111'},
                midpoint: Math.round(window.innerWidth * (70/100) + 25*5),
            },
            moon: {
                location: {x: 70,y: 20},
                size: 25,
            }
        }
    }
    render() {
        return (
        <Wrapper className='home'>
            <div className='background'>
                <Stars {...this.state.stars} />
                <Moon {...this.state.moon} />
                <Mountains {...this.state.mountains} />
            </div>
            <Title {...this.state.title}/>
        </Wrapper>
        )
    }
}

export default Home