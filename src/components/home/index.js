//imports
import React, {Component} from 'react'
//components
import Mountains from './components/mountains'
import Moon from './components/moon'
//scripts
//style
import Wrapper from './style'

class Home extends Component {
    constructor(props) {
        super()
        this.state = {
            width: window.innerWidth,
            height: window.innerHeight,
            mountains: {
                amount: 22,
                shadow: {size: 4, color: '#456'},
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
                <Moon {...this.state.moon} />
                <Mountains {...this.state.mountains}/>
            </div>
        </Wrapper>
        )
    }
}

export default Home