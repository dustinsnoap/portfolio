import React, {Component} from 'react'

import Wrapper from './style'

class Footer extends Component {
    render = () =>
        <Wrapper className='footer'>
            <figure className='page-slider'>
                <div className='page'><span></span></div>
                <div className='divider'></div>
                <div className='page active'><span></span></div>
                <div className='divider'></div>
                <div className='page'><span></span></div>
                <div className='divider'></div>
                <div className='page'><span></span></div>
            </figure>
        </Wrapper>
}

export default Footer