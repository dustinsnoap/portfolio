//imports
import React, {Component} from 'react'
//style
import Wrapper from './style/'

class Skills extends Component {
    constructor() {
        super()
        this.state = {
            skills: [
                {type: 'language', name: 'javascript'},
                {type: 'language', name: 'python'},
                {type: 'language', name: 'go'},
                {type: 'language', name: 'c++'},
                {type: 'language', name: 'php'},
                {type: 'language', name: 'html'},
                {type: 'language', name: 'css'},
                {type: 'technology', name: 'react'},
                {type: 'technology', name: 'node'},
                {type: 'technology', name: 'postgresql'},
                {type: 'technology', name: 'sqlite'},
                {type: 'technology', name: 'django'},
                {type: 'technology', name: 'less'},
            ]
        }
    }
    render = () =>
        <Wrapper className='skills'>
            <h1>Skills</h1>
            <div className='text'>
                <p>Every year I try to learn a new concept; whether that's a new language, a new technology, framework, etc.</p>
                <p>This year my focus was on Python and writing easy to read and clean code. I also looked back and reviewed Golang with a newfound appreciation for it's language specification.</p>
                <p>Some more text nobody will read.</p>
                <p>Below is a list of languages and frameworks I have experience in. If you see something you like; subscribe to my youtube and hit me with a thumbs up.</p>
            </div>
            <div className='skills'>
                {this.state.skills.map(skill =>
                    <span key={skill.name}>{skill.name}</span>    
                )}
            </div>
        </Wrapper>
}

export default Skills