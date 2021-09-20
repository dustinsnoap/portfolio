//imports
import React, {Component} from 'react'
//date
import data_about from '../../data/about'
//style
import Wrapper from './style/'

class Skills extends Component {
    constructor() {
        super()
        this.state = {
            about: data_about
        }
    }
    render = () =>
        <Wrapper className='page skills'>
            <h1 className='page-title'>Skills</h1>
            <div className='content'>
                <div className='blurb'>
                    <p>I'm constantly looking for ways to improve myself. Whether it's learning a new technology or a new methodology to share ideas.</p>
                    <p>Below is a list of skills I've picked up over the years. </p>
                </div>
                <div className='technical'>
                    <h3>Technical</h3>
                    {this.state.about.skills.filter(skill => skill.type === 'language' || skill.type === 'technology').map(skill =>
                        <span key={skill.name} className='skill'>{skill.name}</span>   
                    )}
                </div>
                <div className='essential'>
                    <h3>Essential</h3>
                    {this.state.about.skills.filter(skill => skill.type === 'essential').map(skill =>
                        <span key={skill.name} className='skill'>{skill.name}</span>   
                    )}
                </div>
            </div>         
        </Wrapper>
}

export default Skills