//imports
import React, {Component} from 'react'
//components
//style
import Wrapper from './style/'

class Resume extends Component {
    constructor() {
        super()
        this.state = {
        }
    }
    render = () =>
        <Wrapper className={`page resume ${this.props.classes}`}>
            <h1 className='page-title'>Resume</h1>
        </Wrapper>
}

export default Resume