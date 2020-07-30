//imports
import React, {Component} from 'react'
//components
//style
import Wrapper from './style/'

class Intro extends Component {
    render = () =>
        <Wrapper className={`page intro ${this.props.classes}`}>
            <div className='content'>
                <h2 className='title'>HELLO</h2>
                <h3 className='subtitle'>Is it me you're looking for?</h3>
                <p className='tag'>Back-End Architect</p>
                <p className='tag'>Front-End Developer</p>
            </div>
            
        </Wrapper>
}

export default Intro