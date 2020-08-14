//imports
import React, {Component} from 'react'
//components
//data
import data_about from '../../data/about'
//style
import Wrapper from './style/'

class Intro extends Component {
    constructor() {
        super()
        this.state = {
            about: data_about
        }
    }
    render = () =>
        <Wrapper className={`page intro ${this.props.classes}`}>
            <div className='content'>
                <h2 className='title'>HELLO</h2>
                <h3 className='subtitle'>Is it me you're looking for?</h3>
                {this.state.about.titles.map(title =>
                    <p key={title} className='tag'>{title}</p>
                )}
            </div>
            
        </Wrapper>
}

export default Intro