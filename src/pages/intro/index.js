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
                <p>Is it me you're looking for?</p>
                <div className='tags'>
                    <p>Back-End Architect</p>
                    <p>Front-End Developer</p>
                </div>
            </div>
        </Wrapper>
}

export default Intro