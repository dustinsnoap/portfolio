//imports
import React, {Component} from 'react'
//components
//assets
import Logo from '../../assets/logo'
//style
import Wrapper from './style'

class HUD extends Component {
    add_class = e => {
        e.currentTarget.classList.toggle('active')
        
    }
    render = () =>
        <Wrapper className='hud'>
            <Logo />
            <figure className='menu-btn' onClick={e => this.add_class(e)}>
                <span></span>
                <span></span>
                <span></span>
            </figure>
        </Wrapper>
}

export default HUD