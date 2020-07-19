//imports
import React, {Component} from 'react'
//components
//style
import Wrapper from './style/'

class Intro extends Component {
    render = () =>
        <Wrapper className={this.props.classes}>
            <h1>HELLO</h1>
            <div className='subtitle'>
                <p className='headline'>Is it me you're looking for?</p>
                <div className='tags'>
                    <p className='tag'>Back-End Architect</p>
                    <p className='tag'>Front-End Developer</p>
                </div>
            </div>
        </Wrapper>
}

export default Intro