//imports
import React, {Component} from 'react'
//style
import Wrapper from './style/'

class Skills extends Component {
    constructor() {
        super()
        this.state = {
            skills: [
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
            ]
        }
    }
    render = () =>
        <Wrapper className='skills'>
            <h1>Skills</h1>
            <div className='content'>
                <div className='text'>
                    <p>Every year I try to learn a new concept; whether that's a new language, a new technology, framework, methodology, etc.</p>
                    <p>Below is a list of skills I've picked up over the years. </p>
                </div>
                <div className='skills'>
                {this.state.skills.map(skill =>
                    <span key={skill.name}>{skill.name}</span>    
                )}
                </div>
            </div>
            
        </Wrapper>
}

export default Skills