//imports
import React, {Component} from 'react'
//style
import Wrapper from './style/'

class Skills extends Component {
    constructor() {
        super()
        this.state = {
            technical: [
                {type: 'language', name: 'Javascript'},
                {type: 'language', name: 'Python'},
                {type: 'language', name: 'Golang'},
                {type: 'language', name: 'C++'},
                {type: 'language', name: 'PHP'},
                {type: 'language', name: 'HTML'},
                {type: 'language', name: 'CSS'},
                {type: 'technology', name: 'React'},
                {type: 'technology', name: 'NodeJS'},
                {type: 'technology', name: 'PostgreSQL'},
                {type: 'technology', name: 'SQLite'},
                {type: 'technology', name: 'Django'},
                {type: 'technology', name: 'Less'},
            ],
            non_technical: [
                {type: '', name: 'Interpersonal'},
                {type: '', name: 'Adaptability'},
                {type: '', name: 'Enthusiasm'},
                {type: '', name: 'Collaboration'},
                {type: '', name: 'Creativity'},
                {type: '', name: 'Detail Oriented'},
                {type: '', name: 'Planning'},
                {type: '', name: 'Management'},
            ]
        }
    }
    render = () =>
        <Wrapper className='skills'>
            <div className='content'>
                <h1>Skills</h1>
                <div className='blurb'>
                    <p>I'm constantly looking for ways to improve myself. Whether it's learning a new technology or a new methodology to share ideas.</p>
                    <p>Below is a list of skills I've picked up over the years. </p>
                </div>
                <div className='technical'>
                    <h2>Technical</h2>
                    {this.state.technical.map(skill =>
                        <span key={skill.name}>{skill.name}</span>    
                    )}
                </div>
                <div className='essential'>
                    <h2>Essential</h2>
                    {this.state.non_technical.map(skill =>
                        <span key={skill.name}>{skill.name}</span>    
                    )}
                </div>
            </div>         
        </Wrapper>
}

export default Skills